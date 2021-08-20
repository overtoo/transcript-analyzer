import React, { useState, useEffect } from "react";
import { db } from "./firebase";
// import Cards from "./components/Cards";
import vocabListJSON from "./data/target.json";
import vocabListJSON2 from "./data/learned.json";
import myWordsData from "./data/myWords.json";
import ankiJSON from "./data/anki.json";
import "./styles.css";
import InputBox from "./InputBox";
// import raw from "./data/formatted.json";
import textFile from "./data/raw.txt";
import Player from "./Player";
import Words from "./Words";
import Sentences from "./Sentences";
import firebase from "./firebase";
import ScrollDemo from "./ScrollDemo";

const App = () => {
  const [timePosition, setTimePosition] = useState(
    Math.floor(Math.random() * 750)
  );
  // const [timePosition, setTimePosition] = useState(60);
  const [getTime, setGetTime] = useState(0);

  const [rawText, setRawText] = useState({ cn: "unloaded" });

  const [refreshAudio, setRefreshAudio] = useState(0);
  const [targetWords, setTargetWords] = useState(vocabListJSON);
  // console.log(targetWords);
  const [learnedWords, setLearnedWords] = useState(vocabListJSON2);
  const [words, setWords] = useState(myWordsData);
  const [ankiAdd, setAnkiAdd] = useState([]);
  const [manualAdd, setManualAdd] = useState([]);

  const [displayController, setDisplayController] = useState({
    senCN: false,
    targetSen: false,
    card: true,
  });
  const [refresh, setRefresh] = useState(0);
  const [loadAudio, setLoadAudio] = useState(false);

  // Loads chat messages history and listens for upcoming ones.
  async function loadEpisode(episode = "46") {
    // await citiesRef.doc("SF").set({
    //   name: "San Francisco",
    //   state: "CA",
    //   country: "USA",
    //   capital: false,
    //   population: 860000,
    // });

    const citiesRef = db.collection("rawtranscripts");
    const snapshot = await citiesRef.get();
    snapshot.forEach((doc) => {
      if (doc.data().episode === episode) {
        setRawText({
          cn: doc.data().raw,
          en: doc.data().rawEN,
          py: doc.data().rawPY,
          id: doc.id,
          episode: doc.data().episode,
          data: doc.data().data,
        });
      }
    });
  }

  function parentLockTime(index) {
    alert(index);
    alert(getTime);
  }

  useEffect(() => {
    loadEpisode();
  }, []);

  function selection() {
    if (window.getSelection) {
      // alert(window.getSelection());
      const newWord = window.getSelection().toString().replace(/\n/g, "");
      if (newWord.length > 0) {
        let newTarget = [...words.target];
        newTarget.push(newWord);
        setWords({ ...words, target: newTarget });
      }
      // console.log(newWord);
    }
  }
  // fetch(textFile)
  //   .then((r) => r.text())
  //   .then((text) => {
  //     let tempSentencesCN = text
  //       .split("\n")
  //       .join("$END$")
  //       .split("。")
  //       .join("。$END$")
  //       .split("，")
  //       .join("，$END$")
  //       .split("$END$")
  //       .filter((item) => item);
  //     setSentencesCN(tempSentencesCN);
  //   });

  function loadData() {
    setRefresh(refresh + 1);
    // console.log(refresh);
  }

  function umOk() {
    setDisplayController({
      ...displayController,
      targetSen: !displayController.targetSen,
    });
  }

  function umOk2() {
    setDisplayController({
      ...displayController,
      card: !displayController.card,
    });
  }

  // useEffect(() => {
  //   // alert("test");
  //   // console.log(sentencesCN);

  //   async function fetchText() {
  //     const response = await fetch(textFile);
  //     const text = await response.text();
  //     let tempSentencesCN = text
  //       .split("\n")
  //       .join("$END$")
  //       .split("。")
  //       .join("$END$")
  //       .split("，")
  //       .join("$END$")
  //       .split("$END$")
  //       .filter((item) => item);
  //     setSentencesCN(tempSentencesCN);
  //     // console.log(sentencesCN);

  //     const response2 = await fetch(deepL);
  //     const deepText = await response2.text();
  //     let tempSentencesEN = deepText.split("\n");
  //     setSentencesEN(tempSentencesEN);

  //     const response3 = await fetch(pinyin);
  //     const pinyinText = await response3.text();
  //     let tempSentencesPY = pinyinText.split("<>");
  //     setSentencesPY(tempSentencesPY);

  //     console.log("await function rendered");
  //   }

  //   fetchText();

  //   let dataTemp = [];
  //   for (let i in sentencesCN) {
  //     dataTemp.push({
  //       index: i,
  //       cn: sentencesCN[i],
  //       en: sentencesEN[i],
  //       py: sentencesPY[i],
  //     });
  //   }
  //   setData(dataTemp);
  //   console.log(dataTemp);

  //   console.log("RENDERED");
  //   setTargetWords(removeAllBlanks(targetWords));
  // }, [refresh]);

  // const myArray = raw[0]
  //   .split("\n")
  //   .join("$END$")
  //   .split("，")
  //   .join("$END$")
  //   .split("。")
  //   .join("。$END$")
  //   .split("$END$")
  //   .filter((item) => item);

  // const myArray2 = raw[1]
  //   .split("\n")
  //   .join("$END$")
  //   .split(",")
  //   .join(",$END$")
  //   .split(".")
  //   .join(".$END$")
  //   .split("$END$")
  //   .filter((item) => item);

  // const myArray3 = raw[2].split("\n").filter((item) => item);

  // const myArray4 = raw[3].split("\n").filter((item) => item);

  // console.log(raw[0]);

  // myArray.map((item) => dataParsed.push({ cn: item }));

  // for (let i in myArray) {
  //   dataParsed.push({
  //     index: i,
  //     cn: myArray[i],
  //     en: myArray2[i],
  //     en2: myArray3[i],
  //     py: myArray4[i],
  //   });
  // }

  // alert(myArray.length + " also " + myArray2.length + " as " + myArray3.length);

  function handleChange(newValue) {
    // console.log(newValue.spli t(","));
    setTargetWords(removeAllBlanks(newValue.split("\n")));
  }

  function removeAllBlanks(arr) {
    let arr2 = [...arr];
    for (var i = arr2.length; i--; ) {
      if (arr2[i] === "") arr2.splice(i, 1);
    }
    return arr2;
  }

  function learnedWord(word) {
    setTargetWords(targetWords.filter((item) => item !== word));
    const temp = [...learnedWords];
    temp.push(word);
    setLearnedWords(temp);
  }

  const controlMusic = async (e, timeToGo) => {
    // console.log(e.target.querySelector(".time").innerHTML);
    // console.log(e);
    e.preventDefault();
    if (e.target.querySelector(".time2")) {
      // setTimePosition(e.target.querySelector(".time2").innerHTML);
      setTimePosition(timeToGo - 0.5);
      // console.log(
      //   "our text timestamp is " + e.target.querySelector(".time").innerHTML
      // );
      setRefreshAudio(refreshAudio + 1);
      // console.log(refreshAudio + " refreshAudio has changed");
    }

    // const result = await navigator.clipboard.writeText(
    //   e.target.querySelector(".time").innerHTML
    // );
    // const url = "btt://trigger_named/?trigger_name=music_skip";
    // window.open(url);
    // // popup.blur();
    // window.focus();
  };

  return (
    <div>
      <div className="text-first">
        <ScrollDemo />
        <Player
          // autoPlay
          setGetTime={setGetTime}
          seekTo={timePosition}
          refreshAudio={refreshAudio}
          loadAudio={loadAudio}
          // url={`https://raw.githubusercontent.com/overtoo/test/main/ep46.mp3#t=${timePosition}`}
          url={`https://raw.githubusercontent.com/overtoo/test/main/ep46.mp3`}
        />
        {/* <button onClick={loadData}>ep. 47</button> */}
        <button onClick={umOk}>
          {displayController.targetSen ? "show All" : "target sentences only"}
        </button>
        <button onClick={umOk2}>
          {displayController.card ? "no card" : "card"}
        </button>
        <button onClick={selection}>Add Word</button>
      </div>

      <div className="container">
        {/* {console.log(data)}
      {console.log(data[0].tw)}
      {console.log(targetWords)} */}
        {/* <div className="input-box"></div> */}
        <div>
          <Sentences
            rawText={rawText}
            parentLockTime={parentLockTime}
            getTime={getTime}
            setWords={setWords}
            refresh={refresh}
            words={words}
            controlMusic={controlMusic}
            displayController={displayController}
            cardChange={displayController.card}
            setLoadAudio={setLoadAudio}
          />
        </div>

        <div className="input-box">
          <Words
            words={words}
            setWords={setWords}
            load="target"
            promoteTo="learned"
            color="lightpink"
          />
          <Words
            words={words}
            setWords={setWords}
            load="learned"
            demoteTo="target"
            promoteTo="trash"
            color="lightblue"
          />
          <Words
            words={words}
            setWords={setWords}
            load="trash"
            demoteTo="learned"
            color="lightgrey"
          />
          <div>
            <h3> Add to Anki:</h3>
            {ankiAdd.map((word, index) => {
              if (index === ankiAdd.length - 1) {
                return (
                  <span className="anki-adder">traditional:"{word}" </span>
                );
              }
              return (
                <span className="anki-adder">traditional:"{word}" OR </span>
              );
            })}

            <h3> Manually Add:</h3>
            {manualAdd.map((word) => {
              return <p>{word}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
