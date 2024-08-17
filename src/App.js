import { useState } from "react";
import "./App.css";
import Keyboard from "./Components/Keyboard";
import WordBox from "./Components/WordBox";
import Navbar from "./Components/Navbar";

function App() {
  const [currentKey, setCurrentKeys] = useState("");

  const listOfWords = [
    "cat",
    "dog",
    "sun",
    "moon",
    "star",
    "pen",
    "hat",
    "box",
    "tree",
    "book",
    "red",
    "blue",
    "green",
    "ball",
    "fish",
    "car",
    "bat",
    "cup",
    "fan",
    "key",
    "run",
    "jump",
    "bird",
    "map",
    "shoe",
    "note",
    "game",
    "door",
    "ring",
    "sock",
  ];

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 mt-3">
            <WordBox words={listOfWords} setCurrentKeys={setCurrentKeys} />
          </div>
          <div className="col-md-10">
            <Keyboard currentKey={currentKey} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
