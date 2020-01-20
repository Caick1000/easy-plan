import React from "react";

// Organize different types of questions based on available types (textarea, basicInput, radio button, etc).
// Maybe use a GET to retrieve all the available types, this way it's more scalable.

const Question = props => {
  const { type = "text", onChange, placeholder, header } = props;
  return (
    <>
      <h1>{header}</h1>
      <textarea
        className="field"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default Question;
