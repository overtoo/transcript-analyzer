useEffect(() => {
  const dataCopy2 = [...data];
  let accumulator = 0;
  for (let i in dataCopy2) {
    let sen = dataCopy2[i];
    sen.lw = [];
    sen.length = sen.cn.length;
    sen.position = accumulator;
    accumulator += sen.cn.length;
    for (let j in learnedWords) {
      let target = learnedWords[j];
      let location = sen.cn.indexOf(target);
      if (location > -1) {
        if (!sen.lw) {
          sen.lw = [];
        }
        sen.lw.push(location);
        if (target.length > 1) {
          sen.lw.push(location + 1);
        }
        if (target.length > 2) {
          sen.lw.push(location + 2);
        }
        if (target.length > 3) {
          sen.lw.push(location + 3);
        }
      }
    }
  }
  setData(dataCopy2);
  console.table(dataCopy2);
}, [learnedWords]);

useEffect(() => {
  const dataCopy = [...data];
  let accumulator = 0;
  for (let i in dataCopy) {
    let sen = dataCopy[i];
    sen.tw = [];
    sen.length = sen.cn.length;
    sen.position = accumulator;
    accumulator += sen.cn.length;
    for (let j in targetWords) {
      let target = targetWords[j];
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
  setData(dataCopy);
  console.table(dataCopy);

  const ankiAdd = [];
  const manualAdd = [];

  for (let i in targetWords) {
    if (ankiJSON.includes(targetWords[i])) {
      ankiAdd.push(targetWords[i]);
    } else manualAdd.push(targetWords[i]);
  }
  // console.log("start");
  // console.log(ankiAdd);
  // console.log(ankiJSON.length);
  // console.log(manualAdd);
  // console.log("end");
  setAnkiAdd(ankiAdd);
  setManualAdd(manualAdd);
}, [targetWords]);

<div className="cards-wrapper">
  {data.map((item) => {
    if (item.tw == 0 && displayController.targetSen) {
      return <div></div>;
    } else
      return (
        <div
          // key={card.number}
          className="card"
          onClick={controlMusic}
        >
          <p className="sn py">{item.py}</p>
          <p>
            {item.cn.split("").map((item2, index) => {
              if (item.tw && true) {
                if (item.tw.includes(index)) {
                  return <span className="sn cn hl">{item2}</span>;
                } else return <span className="sn cn">{item2}</span>;
              } else return <span className="sn cn"> </span>;
            })}
          </p>
          <p className="sn en">{item.en}</p>
          <p className="time">{parseInt(0 + item.position / 3.98)}</p>
          <p className="timeToDisplay">
            {parseInt((0 + item.position / 3.98) / 60)}:
            {parseInt((0 + item.position / 3.98) % 60)}
          </p>
        </div>
      );
  })}
</div>;

<div className="text-first">
  {displayController.senCN &&
    data.map((sen) => {
      return (
        <div>
          <p>{sen.py}</p>
          <p>{sen.cn}</p>
          <p>{sen.en}</p>
        </div>
      );
    })}
</div>;
