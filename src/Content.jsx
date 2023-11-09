import { useState } from "react";
const Content = () => {
  const [name, setName] = useState("Syed");
  const [count, setCount] = useState(0);
  const handleNameChange = () => {
    const names = ["Syed", "Mohd", "Azam"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const handleCountIncrease = () => {
    setCount(count + 1);
  };
  const handleCountDecrease = () => {
    setCount(count - 1);
  };
  const handleClickThree = (event) => {
    console.log(event.target.innerText);
  };
  return (
    <>
      <main>
        <p>Hello {name}!</p>
        <p>Count: {count}</p>
        <button
          onClick={handleNameChange}
          style={{
            padding: "5px",
            color: "brown",
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "white",
          }}
        >
          Change Name
        </button>
        <button
          onClick={handleCountIncrease}
          style={{
            padding: "5px",
            color: "brown",
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "white",
          }}
        >
          Count Increase
        </button>
        <button
          onClick={handleCountDecrease}
          style={{
            padding: "5px",
            color: "brown",
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "white",
          }}
        >
          Count Decrease
        </button>
        <button onClick={(e) => handleClickThree(e)}>Button Three</button>
      </main>
    </>
  );
};
export default Content;
