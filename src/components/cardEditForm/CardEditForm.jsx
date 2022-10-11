import React from "react";
import Button from "../button/Button";
import ImageFileInput from "../imageFileInput/ImageFileInput";
import "./cardEditForm.scss";

const CardEditForm = ({ card }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;

  const onChange = (event) => {
    if (event.currentTarget === null) {
      return;
    }
  };

  const onSubmit = () => {};
  return (
    <form className="form">
      <input
        className="cardInput"
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        className="cardInput"
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      />
      <select
        className="themeSelect"
        name="theme"
        value={theme}
        onChange={onChange}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className="cardInput"
        type="text"
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        className="cardInput"
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      />
      <textarea
        className="textarea"
        name="message"
        value={message}
        onChange={onChange}
      ></textarea>
      <div className="fileInput">
        <ImageFileInput />
      </div>
      <div className="submitButton">
        <Button name="Delete" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default CardEditForm;
