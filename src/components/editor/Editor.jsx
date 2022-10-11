import React from "react";
import CardAddForm from "../cardAddForm/CardAddForm";
import CardEditForm from "../cardEditForm/CardEditForm";
import "./editor.scss";

const Editor = ({ cards, addCard }) => {
  return (
    <section className="editor">
      <h1 className="title">Card Maker</h1>
      {cards.map((card) => (
        <CardEditForm key={card.id} card={card} />
      ))}
      <CardAddForm addCard={addCard} />
    </section>
  );
};

export default Editor;
