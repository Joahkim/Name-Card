import React from "react";
import CardAddForm from "../cardAddForm/CardAddForm";
import CardEditForm from "../cardEditForm/CardEditForm";
import "./editor.scss";

const Editor = ({ FileInput, cards, addCard, updateCard, deleteCard }) => {
  return (
    <section className="editor">
      <h1 className="title">Card Maker</h1>
      {Object.keys(cards).map((key) => (
        <CardEditForm
          key={key}
          FileInput={FileInput}
          card={cards[key]}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
      ))}
      <CardAddForm FileInput={FileInput} addCard={addCard} />
    </section>
  );
};

export default Editor;
