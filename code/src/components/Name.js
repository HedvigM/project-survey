//First question
import React from "react";

const Name = ({ name, onNameChange, onStepChange }) => {
  return (
    <div className="container">
      <div className="name">
        <h2>I’m so excited that you want to attend my party!</h2>

        <form className="nameForm">
          Please enter your name below:
          <input
            id="name"
            type="text"
            onChange={onNameChange}
            value={name}
            placeholder="Name"
          />
          <button disabled={name === ""} onClick={onStepChange}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Name;
