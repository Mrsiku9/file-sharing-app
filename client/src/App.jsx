import React from "react";
import { useRef, useState, useEffect } from "react";
import "./App.css";
import { uploadFileData } from "./service/api.js";

const App = () => {
  const [files, setFiles] = useState("");
  const [result, setResult] = useState("");
  useEffect(() => {
    const getImage = async () => {
      if (files) {
        const data = new FormData();
        data.append("name", files.name);
        data.append("files", files);

        const response = await uploadFileData(data);
        setResult(response.path);
      }
    };
    getImage();
  }, [files]);
  const handleOnChange = (e) => {
    setFiles(e.target.files[0]);
  };
  const fileUploadRef = useRef();
  const uploadFile = () => {
    fileUploadRef.current.click();
  };
  const img =
    "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";
  console.log(files);
  return (
    <div className="container">
      <img src={img} alt="banner" />
      <div className="wrapper">
        <h1> Simple file sharing</h1>
        <p>
          <b>upload and share the download link </b>
        </p>
        <button onClick={() => uploadFile()}>upload</button>
        <input
          type="file"
          ref={fileUploadRef}
          style={{ display: "none" }}
          onChange={(e) => handleOnChange(e)}
        />
        <a href={result} alt="downloadfile">
          Download The File Now
        </a>
      </div>
    </div>
  );
};

export default App;
