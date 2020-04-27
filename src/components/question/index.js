import React, { useState } from "react";
import Header from "../header";
// Organize different types of questions based on available types (textarea, basicInput, radio button, etc).
// Maybe use a GET to retrieve all the available types, this way it's more scalable.


const Question = (props) => {
  const { title, description, component, values } = props;
  const [value, setValue] = useState("");

  switch (component.toLowerCase()) {
    case "input":
      return (
        <>
          <div className="componentWrapper">
            <Header title={title} description={description} />
            <input
              className="input"
              style={value ? { opacity: 1 } : {}}
              onChange={event => setValue(event.target.value)}
              type="text"
            />
          </div>
        </>
      )
    case "textarea":
      return (
        <>
          <div className="componentWrapper">
            <Header title={title} description={description} />
            <textarea
              className="textArea"
              style={value ? { opacity: 1 } : {}}
              onChange={event => setValue(event.target.value)}
              type="text"
            />
          </div>

        </>
      )
    case "radiobutton":
      return (
        <>
          <div className="componentWrapper">
            <Header title={title} />
            {values ? values.map((item, index) => {
              return (
                <label className="container" key={index}>{item}
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              )
            }) : null}
          </div>

        </>
      )
    default:
      return (
        <>
          <Header title={title} description={description} />
          <textarea
            className="input"
            type="text"
          />
        </>
      )
  };
};

export default Question;
