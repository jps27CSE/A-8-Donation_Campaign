import { useEffect, useState } from "react";
import Card from "./Card/Card";

const Cards = () => {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, []);
  console.log(cardData);
  return (
    <div className="max-w-6xl mx-auto mt-10 mb-5 grid grid-cols-4 justify-items-center gap-2">
      {cardData.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Cards;
