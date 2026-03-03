// Not finished, doesn't work as intended

import { useState } from "react";

const fruits = [
  "Banana",
  "Apple",
  "Orange",
  "Mango",
  "Pineapple",
  "Watermelon",
];

function SearchFilter() {
  const [searchInput, setSearchInput] = useState("");

  const searchValue = () => {
    fruits.filter((fruit) => fruit.toLocaleLowerCase().includes(searchInput.toLowerCase()));
  };

  return (
    <>
      <div>
        <div>
          {fruits.map((fruit, index) => {
            return <div key={index}>{fruit}</div>;
          })}
        </div>
        <form>
          <label>
            Search:
            <input
              type="text"
              className="border ml-5"
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </label>
          <input
            type="submit"
            value="Submit"
            className="border bg-blue-300 p-4"
          />   
          <div>
           <p>{searchValue}</p>
          </div>
          
        </form>
      </div>
    </>
  );
}

export default SearchFilter;
