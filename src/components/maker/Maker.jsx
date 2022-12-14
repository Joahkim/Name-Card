import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./maker.scss";
import Editor from "../editor/Editor";
import Preview from "../preview/Preview";

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: 1,
      name: "Joah",
      company: "Apple",
      title: "Software Engineer",
      theme: "dark",
      email: "joah@gmail.com",
      message: "stay cool",
      fileName: "Joah",
      fileURL: null,
    },
    2: {
      id: 2,
      name: "Jessy",
      company: "Samsung",
      title: "Software Engineer",
      theme: "light",
      email: "Jessy@gmail.com",
      message: "yo dude",
      fileName: "Jessy",
      fileURL: "www.www.com",
    },
    3: {
      id: 3,
      name: "Kane",
      company: "Apple",
      title: "Software Engineer",
      theme: "colorful",
      email: "Kane@gmail.com",
      message: "hey watttttup",
      fileName: "Kane",
      fileURL: null,
    },
  });
  const navigate = useNavigate();

  const onLogout = () => {
    authService.onLogout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  // const addCard = (card) => {
  //   const updated = [...cards, card];
  //   setCards(updated);
  // };

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
  return (
    <section className="maker">
      <Header onLogout={onLogout} />
      <div className="container">
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
