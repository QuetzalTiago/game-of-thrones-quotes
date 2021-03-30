import React, { useState, useEffect } from "react";
import Quote from "./components/Quote";
import Sigil from "./components/Sigil";
import styled from "@emotion/styled";
import getAverageRGB from "./helpers";

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
  margin-top: 5rem;
  text-align: center;
`;

function App() {
  const [quote, saveQuote] = useState({});

  const getHouseColor = (house) => {
    switch (house) {
      case "House Lannister of Casterly Rock":
        return "red";
      case "House Stark of Winterfell":
        return "grey";
      case "House Tarth of Evenfall Hall":
        return "skyblue";
      case "House Baelish of Harrenhal":
        return "green";
      case "House Greyjoy of Pyke":
        return "grey";
      case "House Baratheon of Dragonstone":
        return "gold";
      case "House Targaryen of King's Landing":
        return "grey";
      case "House Tarly of Horn Hill":
        return "gold";
      case "House Bolton of the Dreadfort":
        return "pink";
      case "House Tyrell of Highgarden":
        return "green";
      default:
        return null;
        break;
    }
  };

  const changeBackground = (color) => {
    document.body.style = `background-color: ${color};`;
  };

  useEffect(() => {
    consultarAPI();
  }, []);

  // useEffect(() => {
  //   if (quote.character) {
  //     changeBackground(getHouseColor(quote.character.house.name));
  //   }
  // }, [quote]);

  const consultarAPI = async () => {
    const api = await fetch(
      "https://game-of-thrones-quotes.herokuapp.com/v1/random"
    );
    const frase = await api.json();
    saveQuote(frase);
  };
  return (
    <Container>
      <Sigil quote={quote} />
      <Quote quote={quote} />
      <Button onClick={consultarAPI}>New quote</Button>
    </Container>
  );
}

export default App;
