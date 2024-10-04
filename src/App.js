import { useEffect, useState } from "react";
import Keyboard from "./Components/Keyboard";
import WordBox from "./Components/WordBox";
import Navbar from "./Components/Navbar";
import { generateRandomWords } from "./common";

function App() {
  const [currentKey, setCurrentKeys] = useState("");
  const [listOfWords, setListOfWords] = useState([])

  useEffect(() => {
    setListOfWords(generateRandomWords())
  }, [])

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
