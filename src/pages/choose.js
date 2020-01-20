import React from "react";
import Button from "../components/button";

const Choose = () => {
  return (
    <>
      <h1>Choose your Business Plan project</h1>
      <p className="premium-note">*complete only for premium accounts</p>
      <Button value="Single-page" route="/single-page" />
      <Button value="Complete" route="complete" />
      <Button value="Custom" route="custom" />
    </>
  );
};

export default Choose;
