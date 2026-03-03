import { useState } from "react";

function Card({ cardtext }) {
  const [selected, setSelected] = useState(true);

  const selectCard = () => {
    setSelected((prev) => !prev);
  };

  return (
    <div
      key={cardtext.id}
      className={
        selected
          ? "border rounded-2xl w-1/4 m-5 p-4 text-3xl"
          : "border rounded-2xl w-1/4 m-5 p-4 text-3xl bg-red-500 text-white"
      }
      onClick={selectCard}
    >
      <p>{cardtext.text}</p>
    </div>
  );
}

export default Card;
