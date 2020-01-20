import React from "react";
import Main from "./routes/routes";
import Container from "./components/container";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Main />
      </Container>
    </BrowserRouter>
  );
}

export default App;
