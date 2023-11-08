const Content = () => {
  const handleNameChange = () => {
    const names = ["Syed", "Mohd", "Azam"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  const handleClickOne = () => {
    console.log("You clicked it!");
  };
  const handleClickTwo = (name) => {
    console.log(`${name} Clicked!`);
  };
  const handleClickThree = (event) => {
    console.log(event.target);
  };
  return (
    <>
      <main>
        <p>Hello {handleNameChange()}!</p>
        <button onClick={handleClickOne}>Button One</button>
        <button onClick={() => handleClickTwo(handleNameChange())}>
          Button Two
        </button>
        <button onClick={(e) => handleClickThree(e)}>Button Three</button>
      </main>
    </>
  );
};
export default Content;
