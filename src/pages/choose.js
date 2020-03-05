import React from "react";
import Button from "../components/button";

const Choose = () => {
  return (
    <>
      <h1>Choose your Business Plan project</h1>
      <p className="premium-note">*multi-page only for premium accounts</p>
      <Button value="Single-page" route="/single-page" />
      <Button value="multi-page" route="multi-page" />
      <Button value="Custom" route="custom" />
    </>
  );
};

export default Choose;
