import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap-spinner';

import WordBox from "./Components/WordBox";
import Navbar from "./Components/Navbar";
import Keyboard from "react-keyboard-package";
import { getParagraph } from "./ApiServices/paragraphService";


function App() {
  const [currentKey, setCurrentKey] = useState("");
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    getParagraph()
      .then((data) => {
        setParagraphs(data?.paragraphs || []);
      })
      .catch((err) => {
        console.error("Failed to fetch paragraphs:", err);
        setParagraphs([]); 
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 mt-3">
            {paragraphs.length > 0 ? (
              <WordBox
                setCurrentKey={setCurrentKey}
                currentKey={currentKey}
                paragraphs={paragraphs}
              />
            ) : (
              <div className="d-flex justify-content-center">
                <Spinner animation="border" color="primary" size="4rem" />
              </div>
            )}
          </div>
          <div className="col-md-10">
            <div
              style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}
            >
              <Keyboard
                currentKey={currentKey}
                theme="light"
                onInit={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
