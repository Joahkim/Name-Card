import React from "react";
import "./card.scss";

const DEFAULT_URL = "/images/science.png";

const Card = ({ card }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;
  const url = fileURL || DEFAULT_URL;
  return (
    <li className={`card ${getStyles(theme)}`}>
      <img className="avatar" src={url} alt="profile" />
      <div className="info">
        <h1 className="name">{name}</h1>
        <p className="company">{company}</p>
        <p className="title">{title}</p>
        <p className="email">{email}</p>
        <p className="message">{message}</p>
      </div>
    </li>
  );
};

function getStyles(theme) {
  switch (theme) {
    case "dark":
      return "dark";
    case "light":
      return "light";
    case "colorful":
      return "colorful";
    default:
      throw new Error(`unknown theme ${theme}`);
  }
}

export default Card;
