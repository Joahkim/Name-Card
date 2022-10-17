import React from "react";
import CardAddForm from "../cardAddForm/CardAddForm";
import CardEditForm from "../cardEditForm/CardEditForm";
import "./editor.scss";

const Editor = ({ cards, addCard, updateCard, deleteCard }) => {
  return (
    <section className="editor">
      <h1 className="title">Card Maker</h1>
      {Object.keys(cards).map((key) => (
        <CardEditForm
          key={key}
          card={cards[key]}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
      ))}
      <CardAddForm addCard={addCard} />
    </section>
  );
};

export default Editor;
