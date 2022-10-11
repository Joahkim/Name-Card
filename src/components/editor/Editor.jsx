import React from "react";
import CardEditForm from "../cardEditForm/CardEditForm";
import "./editor.scss";

const Editor = ({ cards }) => {
  return (
    <section className="editor">
      <h1 className="title">Card Maker</h1>
      {cards.map((card) => (
        <CardEditForm card={card} />
      ))}
    </section>
  );
};

export default Editor;
