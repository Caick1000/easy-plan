import React from "react";
import Question from "../components/question";

// GET to /questions to retrieve all the current questions for this specific page.

const SinglePage = () => {
  return (
    <>
      <Question placeholder="single-page test" header="Question 1" />
    </>
  );
};

export default SinglePage;
