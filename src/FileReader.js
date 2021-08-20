import React, { useState } from "react";
import raw from "./data5.txt";

const FileReader2 = ({ filez }) => {
  const [text, setText] = useState();

  const test = (e) => {
    console.log(e.target.files);
  };

  let fileReader;

  const onChange = (e) => {
    let file = e.target.files;
    console.log("first");
    console.log(file[0]);
    console.log(filez);

    console.log("first");
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file[0]);
  };

  const deleteLines = (string, n = 1) => {
    console.log("remove lines");
    return string.replace(new RegExp(`(?:.*?\n){${n - 1}}(?:.*?\n)`), "");
  };

  const cleanContent = (string) => {
    string = string.replace(/^\s*[\r\n]/gm, "");
    let array = string.split(new RegExp(/[\r\n]/gm));
    console.log(array);
    array.splice(0, 3);
    array.splice(-3);
    return array.join("\n");
  };

  const handleFileRead = (e) => {
    let content = fileReader.result;
    // let text = deleteLines(content, 3);
    content = cleanContent(content);
    // … do something with the 'content' …
    setText(content);
  };
  return (
    <div className="App">
      <div class="upload-btn-wrapper">
        <button class="btn">Upload a file</button>
        <input type="file" name="myfile" onChange={onChange} />
      </div>
      {text && <pre>{text}</pre>}
    </div>
  );
};

// const rootElement = document.getElementById("root");
// ReactDOM.render(<FileReader />, rootElement);

export default FileReader2;
