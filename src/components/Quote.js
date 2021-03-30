import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  h1 {
    font-family: sans-serif;
    text-align: center;
    font-size: 2rem;
    position: relative;
    font-style: italic;
    font-weight: lighter;
  }
  h3 {
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: bold;
    position: relative;
    margin-top: 2rem;
  }
`;

const Quote = ({ quote }) => {
  const { sentence, character } = quote;
  return (
    <Container>
      {sentence ? <h1>"{sentence}"</h1> : null}
      {character ? <h3>- {character.name}</h3> : null}
    </Container>
  );
};

export default Quote;
