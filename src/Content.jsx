const Content = () => {
  const handleNameChange = () => {
    const names = ["Syed", "Mohd", "Azam"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  return (
    <>
      <main>
        <p>Hello {handleNameChange()}</p>
      </main>
    </>
  );
};
export default Content;
