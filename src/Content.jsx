import { useState } from "react";
const Content = () => {
  const [name, setName] = useState("Syed");
  const handleNameChange = () => {
    const names = ["Syed", "Mohd", "Azam"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const handleClickTwo = (name) => {
    console.log(`${name} Clicked!`);
  };
  const handleClickThree = (event) => {
    console.log(event.target.innerText);
  };
  return (
    <>
      <main>
        <p>Hello {name}!</p>
        <button onClick={handleNameChange}>Button One</button>
        <button onClick={() => handleClickTwo(name)}>Button Two</button>
        <button onClick={(e) => handleClickThree(e)}>Button Three</button>
      </main>
    </>
  );
};
export default Content;
