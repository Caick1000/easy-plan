import React from "react";

const Container = props => {
  return (
  <div className="pageWrapper">
    <div className="pageWrapperBg">{props.children}</div>;
  </div>
  )
};

export default Container;
