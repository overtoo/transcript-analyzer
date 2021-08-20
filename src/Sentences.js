import React, { useState, useEffect, useRef } from "react";
import rawChinese from "./data/raw.txt";
import deepL from "./data/deepl.txt";
import pinyin from "./data/pinyin.txt";
import { db } from "./firebase";

import "./styles.css";

const Sentences = ({
  setWords,
  words,
  controlMusic,
  refresh,
  displayController,
  cardChange,
  getTime,
  parentLockTime,
  rawText,
  setLoadAudio,
}) => {
  //refs thing
  const itemsRef = useRef([]);
  const [autoScroll, setAutoScroll] = useState(true);

  const executeScroll = (point) => itemsRef.current[point].scrollIntoView();

  function toggleScroll() {
    if (displayController.card) {
      setAutoScroll(!autoScroll);
    }
  }

  function handleScroll() {
    if (autoScroll) {
      setAutoScroll(false);
    }
  }

  function handlePress(e) {
    if (e.keyCode == 97) {
      setAutoScroll(true);
    }
  }

  function handleClick() {
    setLoadAudio(true);
  }

  useEffect(() => {}, []);

  useEffect(() => {
    if (displayController.card && !displayController.targetSen) {
      window.addEventListener("wheel", () => handleScroll());
      window.addEventListener("keypress", (e) => handlePress(e));
      window.addEventListener("click", (e) => handleClick(e));
      if (data.length > 2 && autoScroll) {
        console.log(getTime);
        let targetIndex;
        data.map((item, i) => {
          if (getTime > item.time) {
            targetIndex = i;
          }
        });
        console.log(targetIndex);
        if (targetIndex > 0) {
          executeScroll(targetIndex - 1);
        }
      }
    }
  }, [getTime]);

  const [data, setData] = useState([]);
  const [preData, setPreData] = useState([]);
  const [sentences, setSentences] = useState([]);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [pageLoaded2, setPageLoaded2] = useState(false);
  const [pageLoaded3, setPageLoaded3] = useState(false);

  //   function lockTime(index) {
  //     // alert(index);
  //     // alert(
  //     //   getTime + " is forced onto current time: " + data[index].lockPosition
  //     // );
  //     let tempData = [...data];
  //     // alert(tempData[index].lockPosition);
  //     tempData[index].lockPosition = getTime;
  //     tempData[index].freePosition = getTime;
  //     // setData(...data, (data[index].lockPosition = 5));
  //   }

  async function saveToCloud() {
    // alert();
    const citiesRef = db.collection("rawtranscripts");
    await citiesRef.doc("active").set({
      rawEN: rawText.en,
      rawPY: rawText.py,
      raw: rawText.cn,
      data: data,
      episode: rawText.episode,
    });
  }

  function lockTime(ind, targetTime = getTime) {
    console.log(data);
    if (ind == "0") {
      return;
    }

    let tempData = [...data];

    const index = parseInt(ind);

    let gradStart;
    let gradEnd;
    tempData[0].time = 0.1;
    tempData[0].fixed = 0.1;
    tempData[tempData.length - 1].time = 840;
    tempData[tempData.length - 1].fixed = 840;

    // alert(index);

    tempData[index].fixed = targetTime;
    // alert(targetTime);

    tempData[index].time = targetTime;

    for (let i = index + 1; i < tempData.length; i++) {
      //   alert(i);
      let sen = tempData[i];
      if (sen.fixed) {
        // sen.mark = "**E";
        gradEnd = i;
        break;
      }
    }

    for (let i = index - 1; i < tempData.length; i--) {
      let sen = tempData[i];
      if (sen.fixed > -1) {
        // sen.mark = "**S";
        gradStart = i;
        break;
      }
    }

    for (let i = gradStart + 1; i < index; i++) {
      tempData[i].time = Math.round(
        ((tempData[gradStart].fixed +
          ((i - gradStart) / (index - gradStart)) *
            (tempData[index].fixed - tempData[gradStart].fixed)) *
          10) /
          10
      );
    }

    for (let i = gradEnd - 1; i > index; i--) {
      tempData[i].time = Math.round(
        ((tempData[index].fixed +
          ((i - index) / (gradEnd - index)) *
            (tempData[gradEnd].fixed - tempData[index].fixed)) *
          10) /
          10
      );
    }

    setData(tempData);
    console.log(tempData);

    // console.table(tempData);
  }

  useEffect(() => {
    if (rawText.cn != "unloaded" && rawText.data) {
      setData(rawText.data);
      console.log("data from cloud has been loaded. Should only happen once.");
      // setLoadAudio(true);
    } else if (rawText.cn != "unloaded" && !rawText.data) {
      console.log(
        "raw data from cloud has loaded. NO TIMESTAMPS. should never happen unless raw."
      );

      setPageLoaded(true);

      let tempSentencesCN = rawText.cn
        .split("。<><>")
        .join("||$END$")
        .split("。<>")
        .join("|$END$")
        .split("<><>")
        .join("||$END$")
        .split("<>")
        .join("|$END$")
        .split("。")
        .join("。$END$")
        .split("，")
        .join("，$END$")
        .split("$END$")
        .filter((item) => item);
      let tempSentencesEN = rawText.en.split("<>");
      let tempSentencesPY = rawText.py.split("<>");

      setSentences([tempSentencesCN, tempSentencesEN, tempSentencesPY]);

      let dataTemp = [];
      for (let i in sentences[0]) {
        dataTemp.push({
          index: parseInt(i),
          cn: sentences[0][i],
          en: sentences[1][i],
          py: sentences[2][i],
          // en: sentencesEN[i],
          // py: sentencesPY[i],
        });
      }
      setData(dataTemp);

      setWords(words);
      if (pageLoaded2) {
        setPageLoaded3(true);
      }

      //refs thing
      itemsRef.current = itemsRef.current.slice(0, data.length);
    }
    // }, [words, refresh, pageLoaded, pageLoaded2, cardChange, rawText]);
  }, [rawText]);

  useEffect(() => {
    const dataCopy2 = [...data];

    let accumulator = 0;
    let totalChars = 0;
    const totalLengthSeconds = 840;
    //find total characters in cn sentences
    for (let i in dataCopy2) {
      let sen = dataCopy2[i];
      totalChars += sen.cn.length;
    }
    for (let i in dataCopy2) {
      let sen = dataCopy2[i];
      sen.tw = [];
      sen.length = sen.cn.length;
      sen.position = accumulator;
      sen.freePosition = parseInt(
        (accumulator / totalChars) * totalLengthSeconds
      );
      accumulator += sen.cn.length;
    }
    for (let i in dataCopy2) {
      let sen = dataCopy2[i];
      for (let j in words.target) {
        let target = words.target[j];
        let location = sen.cn.indexOf(target);
        if (location > -1) {
          if (!sen.tw) {
            sen.tw = [];
          }
          sen.tw.push(location);
          if (target.length > 1) {
            sen.tw.push(location + 1);
          }
          if (target.length > 2) {
            sen.tw.push(location + 2);
          }
          if (target.length > 3) {
            sen.tw.push(location + 3);
          }
        }
      }
    }
    // console.log("*********************************");
    setData(dataCopy2);
    if (pageLoaded) {
      setPageLoaded2(true);
    }
  }, [words, pageLoaded, pageLoaded3]);

  //

  return (
    <div
      className={`${
        displayController.card ? "cards-wrapper" : "nocards-wrapper"
      }`}
    >
      <div className="save-to-cloud">
        <button onClick={toggleScroll}>
          {" "}
          {autoScroll ? "AUTOSCROLL: ON" : "AUTOSCROLL: OFF"}{" "}
        </button>

        <button onClick={saveToCloud}>Save to Cloud</button>
      </div>

      {data.map((item, i) => {
        if (item.tw == 0 && displayController.targetSen) {
          return <div></div>;
        } else
          return (
            <div
              className={`${displayController.card ? "card" : "nocard"}`}
              onClick={(e) => controlMusic(e, item.time)}
              ref={(el) => (itemsRef.current[i] = el)}
            >
              <p className={`${displayController.card ? "sn py" : "hide"}`}>
                {item.py}
              </p>
              <span className="off">
                {item.cn.split("").map((item2, index) => {
                  if (item.tw && true) {
                    if (item.tw.includes(index)) {
                      return <span className="sn cn hl">{item2}</span>;
                    } else {
                      if (item2 == "|") {
                        return (
                          <span className="sn cn">
                            <br></br>
                          </span>
                        );
                      }
                      return <span className="sn cn">{item2}</span>;
                    }
                  } else {
                    return <span className="sn cn">{item2}</span>;
                  }
                })}
              </span>
              <p className={`${displayController.card ? "sn en" : "hide"}`}>
                {item.en}
              </p>
              {/* <p className="time3">{parseInt(0 + item.position / 3.98)}</p> */}
              <p className="time2 time">{parseInt(item.time)}</p>
              <p
                className={`${
                  displayController.card ? "timeToDisplay" : "hide"
                }`}
              >
                {parseInt(item.time / 60)}:{parseInt(item.time % 60)}
              </p>
              <p
                className={`${
                  displayController.card ? "timeToDisplay2" : "hide"
                }`}
                onClick={() => {
                  lockTime(item.index);
                }}
              >
                {item.fixed
                  ? "refix (click to refix audio to this position)"
                  : "fix (click to fix audio to this position)"}
              </p>
              {/* <p
                className={`${
                  displayController.card ? "timeToDisplay3" : "hide"
                }`}
                onClick={() => {
                  parentLockTime(item.index);
                }}
              >
                {parseInt(item.freePosition / 60)}:
                {parseInt(item.freePosition % 60)}
              </p> */}
            </div>
          );
      })}
    </div>
  );
};

export default Sentences;
