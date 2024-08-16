import { useState } from "react";
import "./App.css";
import Keyboard from "./Components/Keyboard";
import WordBox from "./Components/WordBox";

function App() {
  const [currentKey, setCurrentKeys] = useState("")

  console.log('currentKey', currentKey)

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
        <div className="col-md-6 mt-3">
          <h3 className="text-center">10FastFigner</h3>
          <WordBox words={listOfWords} setCurrentKeys={ setCurrentKeys } />
        </div>
        <Keyboard currentKey={ currentKey } />
      </div>
    </div>
  );
}

export default App;
