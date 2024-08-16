import { useState } from "react";
import "./App.css";
import Keyboard from "./Components/Keyboard";
import WordBox from "./Components/WordBox";

function App() {
  const [currentKey, setCurrentKeys] = useState("")

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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 mt-3">
          <h4 className="text-center">10 Fast Figner</h4>
          <WordBox words={listOfWords} setCurrentKeys={ setCurrentKeys } />
        </div>
        <Keyboard currentKey={ currentKey } />
      </div>
    </div>
  );
}

export default App;
