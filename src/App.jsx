import reactLogo from "./assets/react.svg";
import viteLogo from "/public/vite.svg";
import "./App.css";

function App() {
  const handleNameChange = () => {
    const names = ["Syed", "Mohd", "Azam"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> React Complete Series</h1>
      <h1>Hello {handleNameChange()}</h1>
    </>
  );
}

export default App;
