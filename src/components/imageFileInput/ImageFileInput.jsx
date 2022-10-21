import React, { useRef, useState } from "react";
import "./imageFileInput.scss";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const [loading, setLoading] = useState(false);

  const openFile = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    setLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setLoading(false);
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
      {!loading && (
        <button
          className={`imageButton ${name ? "pink" : "gray"}`}
          onClick={openFile}
        >
          {name || "No file"}
        </button>
      )}

      {loading && <div className="imageLoading"></div>}
    </div>
  );
};

export default ImageFileInput;
