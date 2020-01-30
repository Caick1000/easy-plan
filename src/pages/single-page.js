import React, { useEffect, useState } from "react";
import Question from "../components/question";
import { getAllQuestions } from "../api/question";

const SinglePage = () => {
  const [allQuestions, setAllQuestions] = useState([]);

  useEffect(() => {
    async function requestAllQuestions() {
      try {
        const questions = await getAllQuestions();
        console.log(questions.data.question, "jsjsjsjsjsjsjjs");
        setAllQuestions(questions.data.question);
      }
      catch (error) {
        console.log(error);
      };
    };
    requestAllQuestions();
  }, [allQuestions])

  return (
    <>
      {allQuestions.map((question) => {
        return <Question title={question.title} component={question.category.component} />
      })}
    </>
  );
};

export default SinglePage;
