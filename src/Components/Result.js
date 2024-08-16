import React from "react";

function Result({ correctWords, wrongWords }) {
  return (
    <div className="card mt-3">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{correctWords} WPM</li>
        <li className="list-group-item">Correct words: {correctWords}</li>
        <li className="list-group-item">Wrong words: {wrongWords?.length}</li>
      </ul>
    </div>
  );
}

export default Result;
