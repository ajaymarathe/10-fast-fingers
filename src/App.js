import { useEffect, useState } from "react";
import WordBox from "./Components/WordBox";
import Navbar from "./Components/Navbar";
import { generateRandomWords } from "./common";
import Keyboard from 'react-keyboard-package'
import ReactSpinner from 'react-bootstrap-spinner'


function App() {
  const [currentKey, setCurrentKeys] = useState("");
  const [listOfWords, setListOfWords] = useState([]);

  useEffect(() => {
    setListOfWords(generateRandomWords(15));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 mt-3">
            <WordBox words={listOfWords} setCurrentKeys={setCurrentKeys} />
            <ReactSpinner type="grow" color="info" size="4" />
          </div>
          <div className="col-md-10">
            <div
              style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}
            >
              <Keyboard currentKey={currentKey} theme={'light'} onInit={ () => console.log('nice owrl')} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
