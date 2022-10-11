import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./maker.scss";
import Editor from "../editor/Editor";
import Preview from "../preview/Preview";

const Maker = ({ authService }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const userID = location.state.id;

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
  return (
    <section className="maker">
      <Header onLogout={onLogout} />
      <div className="container">
        <Editor />
        <Preview />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
