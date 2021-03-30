import React, { useState, useEffect } from "react";
import Quote from "./components/Quote";
import styled from "@emotion/styled";

const Button = styled.button`
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

const Container = styled.div`
  text-align: center;
`;

function App() {
  const [quote, saveQuote] = useState({});

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    const api = await fetch(
      "https://game-of-thrones-quotes.herokuapp.com/v1/random"
    );
    const frase = await api.json();
    saveQuote(frase);
    console.log(frase);
  };
  return (
    <Container>
      <Quote quote={quote} />
      <Button onClick={consultarAPI}>New quote</Button>
    </Container>
  );
}

export default App;
