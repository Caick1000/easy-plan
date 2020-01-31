import React from "react";
// Organize different types of questions based on available types (textarea, basicInput, radio button, etc).
// Maybe use a GET to retrieve all the available types, this way it's more scalable.


const Question = (props) => {
  const { title, description, component } = props;
  switch (component.toLowerCase()) {
    case "textarea":
      return (
        <>
          <h1>{title}</h1>
          <p>{description ? description : ""}</p>
          <textarea
            className="field"
            type="text"
          />
        </>
      )
    default:
      return (
        <>
          <h1>{title}</h1>
          <p>{description ? description : ""}</p>
          <textarea
            className="field"
            type="text"
          />
        </>
      )
  };
};

export default Question;
