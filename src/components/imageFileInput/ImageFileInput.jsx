import React, { useRef } from "react";
import "./imageFileInput.scss";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();

  const openFile = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    console.log(event.target.files[0]);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className="imageContainer">
      <input
        className="imageInput"
        ref={inputRef}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <button className="imageButton" onClick={openFile}>
        {name || "No file"}
      </button>
    </div>
  );
};

export default ImageFileInput;
