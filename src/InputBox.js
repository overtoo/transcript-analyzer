//InputBox.js;
import React, { useState, useEffect } from "react";

const InputBox = (props) => {
  const [value, setValue] = useState(props.targetWords.join("\n"));

  // function useInput({ type /*...*/ }) {
  //   const [value, setValue] = useState("");
  //   const input = (
  //     <input
  //       value={value}
  //       onChange={(e) => setValue(e.target.value)}
  //       type={type}
  //     />
  //   );
  //   return [value, input];
  // }

  // const onKeyPress = ({ nativeEvent }) => {
  //   if (nativeEvent.key === "Enter") {
  //     return false;
  //   }
  // };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <textarea
          className="input"
          // onChange={(e) => setValue(e.target.value)}
          onChange={(e) => props.handleChange(e.target.value)}
          value={props.targetWords.join("\n")}
          type="textarea"
          id="input"
          onKeyPress={(e) => {
            console.log(e);
            if (e.charCode == 13) {
              e.preventDefault();
              props.handleChange(e.target.value + "\n" + ">");
              return false;
            }
          }}
          // onKeyPress={onKeyPress}
          rows={5}
        ></textarea>
      </form>
    </div>
  );
};

export default InputBox;
