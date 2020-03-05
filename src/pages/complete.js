import React, { useEffect, useState } from "react";
import { getAllQuestions } from "../api/question";
import Question from "../components/question";
import Header from "../components/header";

const Complete = () => {
  const [allQuestions, setAllQuestions] = useState([]);

  useEffect(() => {
    const requestAllQuestions = async () => {
      try {
        const questions = await getAllQuestions();
        const planQuestions = questions.data.question.filter(item => item.planType.toLowerCase() === "complete")
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
        const { title, component, values  } = question;
        return <Question title={title} component={component} key={index} values={values}/>
      }) : <Header title="You should not be seeing this..." description="Please enter in contact with the support team"/>}
    </>
  );
};

export default Complete;
