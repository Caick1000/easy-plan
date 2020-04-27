import React from "react";
import Question from "../components/question";
import Header from "../components/header";
import { planQuestions } from "../questionsJson";

const SinglePage = () => {
  return (
    <>
      {planQuestions.length ? planQuestions.map((question, index) => {
        const { title, component, values, description } = question;
        return <Question title={title} component={component} key={index} values={values} description={description} />
      }) : <Header title="You should not be seeing this..." description="Please enter in contact with the support team" />}
    </>
  );
};

export default SinglePage;