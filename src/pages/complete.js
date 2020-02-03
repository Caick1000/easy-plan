import React, { useEffect, useState } from "react";
import Question from "../components/question";
import { getAllQuestions } from "../api/question";

const Complete = () => {
  const [allQuestions, setAllQuestions] = useState([]);

  useEffect(() => {
    const requestAllQuestions = async () => {
      try {
        const questions = await getAllQuestions();
        const planQuestions = questions.data.filter(question => question.planType.toLowerCase() === "complete")
        setAllQuestions(planQuestions);
      }
      catch (error) {
        console.log(error);
      };
    };
    requestAllQuestions();
  }, [allQuestions]);

  return (
    <>
      {allQuestions ? allQuestions.map((question, index) => {
        return <Question title={question.title} component={question.category.component} key={index} />
      }) : null}
    </>
  );
};

export default Complete;
