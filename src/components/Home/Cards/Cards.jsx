import { useEffect, useState } from "react";
import Card from "./Card/Card";
import { useInputValue } from "../../Context/InputValueContext";

const Cards = () => {
  const [cardData, setCardData] = useState([]);
  const { inputValue } = useInputValue();

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, []);

  const filteredData = cardData.filter((donate) =>
    donate.category.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto mt-10 mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-2">
      {filteredData.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Cards;
