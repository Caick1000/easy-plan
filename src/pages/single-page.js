import React, { useEffect, useState } from "react";
import Question from "../components/question";
import { getAllQuestions } from "../api/question";

const SinglePage = () => {
  const [allQuestions, setAllQuestions] = useState([]);

  useEffect(() => {
    async function requestAllQuestions() {
      try {
        const questions = await getAllQuestions();
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
      {allQuestions ? allQuestions.map((question, index) => {
        return <Question title={question.title} component={question.category.component} key={index}/>
      }) : null}
    </>
  );
};

export default SinglePage;
