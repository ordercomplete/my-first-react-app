import { useState } from "react";
// import React from "react";
import "./App.css";

const getInitialColor = (length) => {
  if (length > 4) return 1;
  return 0;
};

function App() {
  const list = [
    { id: 1, name: "Київ" },
    { id: 2, name: "Львів" },
    { id: 3, name: "Харків" },
    { id: 4, name: "Одеса" },
  ];

  const color = [
    "red",
    "blue",
    "green",
    "yellow",
    "red",
    "blue",
    "green",
    "yellow",
  ];

  const [index, setIndex] = useState(0);

  // const [colorIndex, setColorIndex] = useState(0);

  const [colorIndex, setColorIndex] = useState(() =>
    getInitialColor(color.length)
  );

  const handleClick = () => {
    setIndex((prevIndex) =>
      prevIndex === list.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleClickColor = () => {
    setColorIndex((prevColorIndex) => prevColorIndex + 1);
    setColorIndex((prevColorIndex) => prevColorIndex + 1);

    setTimeout(() => {
      setColorIndex((prevColorIndex) => prevColorIndex + 1);
    }, 3000);

    console.log("update", colorIndex);
  };

  console.log("render", index, colorIndex);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Next</button>
        <button onClick={handleClickColor}>Next color</button>

        <h1 style={{ color: color[colorIndex] }}>
          Current city: {list[index].name}
        </h1>
      </header>
    </div>
  );
}
export default App;
