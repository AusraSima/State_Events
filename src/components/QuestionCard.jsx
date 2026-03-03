import { useState } from "react";

function QuestionCard({ accordiontext }) {
  const [selected, setSelected] = useState(false);

  const selectQuestion = () => {
    setSelected((prev) => !prev);
  };

  return (
    <div>
      <div
        key={accordiontext.id}
        className="w-200 p-4 text-3xl bg-white mb-5"
        onClick={selectQuestion}
      >
        <div className="flex justify-between items-start">
          <p className="font-bold pl-5">{accordiontext.question}</p>
          <button className="border font-bold px-3 py-1 bg-blue-200 text-blue-800 rounded-xl">
            {selected ? "+" : "-"}
          </button>
        </div>
        <div className=" text-3xl  ">
          {selected && <p>{accordiontext.answer}</p>}
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
