import React from "react";
import Question from "../components/question";
import Header from "../components/header";

const SinglePage = () => {

  const planQuestions = [{
    "planType": "single-page",
    "title": "Title of the question",
    "Description": "Description",
    "component": "input",
    "values": "hello",
    "section": "idea"
},
{
  "planType": "single-page",
  "title": "Title of the question 2",
  "Description": "Description 2",
  "component": "textArea",
  "values": "hello 2",
  "section": "idea"
},
{
  "planType": "single-page",
  "title": "Title of the question 2",
  "Description": "Description 2",
  "component": "textArea",
  "values": "hello 2",
  "section": "idea"
},
{
  "planType": "single-page",
  "title": "Title of the question 2",
  "Description": "Description 2",
  "component": "textArea",
  "values": "hello 2",
  "section": "idea"
},
{
  "planType": "single-page",
  "title": "Title of the question 2",
  "Description": "Description 2",
  "component": "textArea",
  "values": "hello 2",
  "section": "idea"
}];

  return (
    <>
      {planQuestions.length ? planQuestions.map((question, index) => {
        const { title, component, values } = question;
        return <Question title={title} component={component} key={index} values={values} />
      }) : <Header title="You should not be seeing this..." description="Please enter in contact with the support team"/>}
    </>
  );
};

export default SinglePage;
