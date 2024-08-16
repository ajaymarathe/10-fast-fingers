import React from "react";

function WordContainer({ currentIndex, words, newAddedWords, wrongWords }) {
  return (
    <div className="card d-flex flex-row flex-wrap mt-5 p-2">
      {words?.map((item, i) => {
        let selected = currentIndex === i ? "bg-primary text-white" : "";

        return (
          <span
            className={`word mr-2 mb-2 ${
              newAddedWords.includes(item) ? "text-success" : ""
            } 
      ${wrongWords.includes(item) ? "text-danger" : ""}
      ${selected}`}
            key={i}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}

export default WordContainer;
