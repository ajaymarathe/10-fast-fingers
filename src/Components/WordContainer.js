import React from "react";

function WordContainer({ currentIndex, words, newAddedWords, wrongWords }) {
  return (
    <div className="word-container card d-flex flex-row flex-wrap mt-3 shadow-sm">
      {words?.map((item, i) => {
        let selected = currentIndex === i ? "bg-primary text-white" : "";

        return (
          <span
            className={`word mr-2 mb-1 shadow-sm ${
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
