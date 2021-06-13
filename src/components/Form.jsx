import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import "./FormStyles.css";

const initialState = {
  name: "",
  email: "",
  content: "",
  nameError: "",
  emailError: "",
  contentError: "",
};

const ProposalForm = () => {
  const [name, setName] = useState(initialState.name);
  const [email, setEmail] = useState(initialState.email);
  const [content, setContent] = useState(initialState.content);
  const [nameError, setNameError] = useState(initialState.nameError);
  const [emailError, setEmailError] = useState(initialState.emailError);
  const [contentError, setContentError] = useState(initialState.contentError);

  const validity = () => {
    let nameError = "";
    let emailError = "";
    let contentError = "";

    if (!name) {
      nameError = "Name cannot be blank";
    }
    if (!email.includes("@")) {
      emailError = "Invalid format";
    }
    if (!content) {
      contentError = "Please do not leave this blank";
    }

    if (nameError || emailError || contentError) {
      setNameError(nameError);
      setEmailError(emailError);
      setContentError(contentError);
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validity()) {
      console.log({
        name: name,
        email: email,
        content: content,
      });
      setName(initialState.name);
      setEmail(initialState.email);
      setContent(initialState.content);
      setNameError(initialState.nameError);
      setEmailError(initialState.emailError);
      setContentError(initialState.contentError);
    }
    //handleChange();
  };

  //const handleChange = useCallback(
  //(event) => {
  //onSubmit(onSubmit + 1);
  //},
  //[onSubmit]
  //);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="name"
            placeholder="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            maxLength="255"
          />
          <div className="errorInput">{nameError}</div>
        </div>
        <div>
          <input
            name="email"
            placeholder="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            maxLength="255"
          />
          <div className="errorInput">{emailError}</div>
        </div>
        <div>
          <textarea
            name="content"
            placeholder="Write here..."
            value={content}
            onChange={(event) => setContent(event.target.value)}
            maxLength="2000"
            rows="4"
            cols="23"
          />
          <div className="errorInput">{contentError}</div>
        </div>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};

export default ProposalForm;
