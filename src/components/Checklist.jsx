import { useState } from "react";

function Checklist() {
  const [selected, setSelected] = useState([]);

  const selectFruit = (fruit) => {
    if (fruit === "") return;
    setSelected((prev) => [...prev, fruit]);
  };

  return (
    <div>
      <h1 className="text-3xl text-green-800 font-bold m-5">Select a fruit</h1>
      <form className="m-auto w-40 text-left">
        <div>
          <input
            type="checkbox"
            name="banana"
            value="Banana"
            onClick={(e) => {
              selectFruit(e.target.value);
            }}
          />
          <label htmlFor="banana"> Banana</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="apple"
            value="Apple"
            onChange={(e) => {
              selectFruit(e.target.value);
            }}
          />
          <label htmlFor="apple"> Apple</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="orange"
            value="Orange"
            onChange={(e) => {
              selectFruit(e.target.value);
            }}
          />
          <label htmlFor="orange"> Orange</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="mango"
            value="Mango"
            onChange={(e) => {
              selectFruit(e.target.value);
            }}
          />
          <label htmlFor="mango"> Mango</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="pineapple"
            value="Pineapple"
            onChange={(e) => {
              selectFruit(e.target.value);
            }}
          />
          <label htmlFor="pineapple"> Pineapple</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="watermelon"
            value="Watermelon"
            onChange={(e) => {
              selectFruit(e.target.value);
            }}
          />
          <label htmlFor="watermelon"> Watermellon</label>
        </div>
        <button className="border bg-amber-300 p-4">Reset</button>

        <div>
          You selected:{" "}
          {selected.map((fruit, index) => (
            <p key={index}>{fruit}</p>
          ))}
        </div>
      </form>
    </div>
  );
}

export default Checklist;
