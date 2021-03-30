import React from "react";
import styled from "@emotion/styled";

const Image = styled.img`
  max-height: 15rem;
  margin-bottom: 1rem;
`;

const getSigilImage = (sigilName) => {
  switch (sigilName) {
    case "House Lannister of Casterly Rock":
      return "./img/sigils/house_lannister_by_liquidsouldesign_d467h1y-fullview.jpg";
      break;
    case "House Stark of Winterfell":
      return "./img/sigils/game_of_thrones___house_stark_by_liquidsouldesign_d467f8l-fullview.jpg";
    case "House Tarth of Evenfall Hall":
      return "./img/sigils/house_tarth_by_liquidsouldesign_d4yfq7v-fullview.jpg";
    case "House Baelish of Harrenhal":
      return "./img/sigils/house_baelish_by_liquidsouldesign_d4azjqb-fullview.jpg";
    case "House Greyjoy of Pyke":
      return "./img/sigils/house_greyjoy_by_liquidsouldesign_d467ijp-fullview.jpg";
    case "House Baratheon of Dragonstone":
      return "./img/sigils/house_baratheon_by_liquidsouldesign_d467glv-fullview.jpg";
    case "House Targaryen of King's Landing":
      return "./img/sigils/house_targaryen_by_liquidsouldesign_d467g9h-fullview.jpg";
    case "House Tarly of Horn Hill":
      return "./img/sigils/house_targaryen_by_liquidsouldesign_d467g9h-fullview.jpg";
    case "House Bolton of the Dreadfort":
      return "./img/sigils/house_bolton_by_liquidsouldesign_d46xez7-fullview.jpg";
    case "House Tyrell of Highgarden":
      return "./img/sigils/house_tyrell_by_liquidsouldesign_d467jau-fullview.jpg";
    case null:
      return "./img/sigils/house_dondarrion_by_liquidsouldesign_d4os7u7-fullview.jpg";
    default:
      return null;
      break;
  }
};

const Sigil = ({ quote }) => {
  const { character } = quote;
  return (
    <div>
      {character ? (
        <Image src={getSigilImage(character.house.name)} alt="" />
      ) : null}
    </div>
  );
};

export default Sigil;
