import React from "react";
import Button from "../button/Button";
import ImageFileInput from "../imageFileInput/ImageFileInput";
import "./cardEditForm.scss";

const CardEditForm = ({ card }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;

  const onSubmit = () => {};
  return (
    <form className="form">
      <input className="cardInput" type="text" name="name" value={name} />
      <input className="cardInput" type="text" name="company" value={company} />
      <select className="themeSelect" name="theme" value={theme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input className="cardInput" type="text" name="title" value={title} />
      <input className="cardInput" type="text" name="email" value={email} />
      <textarea className="textarea" name="message" value={message}></textarea>
      <div className="fileInput">
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
