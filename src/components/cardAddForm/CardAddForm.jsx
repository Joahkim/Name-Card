import React, { useRef } from "react";
import Button from "../button/Button";
import ImageFileInput from "../imageFileInput/ImageFileInput";
import "./cardAddForm.scss";

const CardAddForm = ({ addCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: "",
      fileURL: "",
    };
    formRef.current.reset();
    addCard(card);
  };
  return (
    <form ref={formRef} className="form">
      <input
        ref={nameRef}
        className="cardInput"
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        ref={companyRef}
        className="cardInput"
        type="text"
        name="company"
        placeholder="Company"
      />
      <select
        ref={themeRef}
        className="themeSelect"
        name="theme"
        placeholder="Theme"
      >
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </select>
      <input
        ref={titleRef}
        className="cardInput"
        type="text"
        name="title"
        placeholder="Title"
      />
      <input
        ref={emailRef}
        className="cardInput"
        type="text"
        name="email"
        placeholder="Email"
      />
      <textarea
        ref={messageRef}
        className="textarea"
        name="message"
        placeholder="Message"
      ></textarea>
      <div className="fileInput">
        <ImageFileInput />
      </div>
      <div className="submitButton">
        <Button name="Add" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default CardAddForm;
