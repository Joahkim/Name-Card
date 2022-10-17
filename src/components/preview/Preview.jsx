import React from "react";
import Card from "../card/Card";
import "./preview.scss";

const Preview = ({ cards }) => {
  return (
    <section className="preview">
      <h1 className="cardTitle">Card Preview</h1>
      <ul className="cards">
        {Object.keys(cards).map((key) => (
          <Card key={key} card={cards[key]} />
        ))}
      </ul>
    </section>
  );
};

export default Preview;
