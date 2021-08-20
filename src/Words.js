import React, { useState, useEffect, useReducer } from "react";
import "./styles.css";

// import Cards from "./components/Cards";

//<Words words={myWords.target} promote={myWords.learned} color="red" />

const Words = (props) => {
  const [blank, setBlank] = useState(false);

  //   const [, forceUpdate] = useReducer((x) => x + 1, 0);

  //   useEffect(() => {
  //     setBlank(!blank);
  //     forceUpdate(); // force re-render
  //   }, [props.words]);

  function promoteWord(e, word) {
    if (e.button == 0 && props.promoteTo) {
      let oldArray = props.words[props.load];
      let newArray = oldArray.filter((item) => item !== word);
      // setTargetWords(targetWords.filter((item) => item !== word));
      let newObject = {};
      let target = Object.assign(newObject, props.words);
      newObject[props.load] = newArray;
      let promoteArray = props.words[props.promoteTo];
      newObject[props.promoteTo] = [...promoteArray, word];
      props.setWords(newObject);
      // const temp = [...learnedWords];
      // temp.push(word);
      // setLearnedWords(temp);
    } else if (e.button == 1 && props.demoteTo) {
      let oldArray = props.words[props.load];
      let newArray = oldArray.filter((item) => item !== word);
      // setTargetWords(targetWords.filter((item) => item !== word));
      let newObject = {};
      let target = Object.assign(newObject, props.words);
      newObject[props.load] = newArray;
      let demoteArray = props.words[props.demoteTo];
      newObject[props.demoteTo] = [...demoteArray, word];
      props.setWords(newObject);
    }
  }

  return (
    <div className="words-wrapper">
      {/* {console.log(props.words)}
      {console.log("loaddded")} */}
      {props.words[props.load].map((word) => {
        return (
          <span
            class="bubble"
            style={{
              backgroundColor: props.color,
            }}
            // onClick={(e) => promoteWord(e, word)}
            onMouseDown={(e) => promoteWord(e, word)}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

export default Words;
