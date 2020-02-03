import React, { useEffect, useState } from "react";
import { getAllQuestions } from "../api/question";
import Question from "../components/question";
import Header from "../components/header";

const SinglePage = () => {
  const [allQuestions, setAllQuestions] = useState([]);

  useEffect(() => {
    const requestAllQuestions = async () => {
      try {
        const questions = await getAllQuestions();
        const planQuestions = questions.data.question.filter(item => item.planType.toLowerCase() === "single-page");
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
      {allQuestions.length ? allQuestions.map((question, index) => {
        return <Question title={question.title} component={question.category.component} key={index} values={question.category.values} />
      }) : <Header title="You should not be seeing this..." description="Please enter in contact with the support team"/>}
    </>
  );
};

export default SinglePage;
