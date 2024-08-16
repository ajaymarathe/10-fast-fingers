import React, { useEffect, useState } from "react";
import WordContainer from "./WordContainer";
import CreateComponent from "./CreateComponent";
import Result from "./Result";

function WordBox({ words, setCurrentKeys }) {
  const [currentWord, setCurrentWord] = useState("");
  const [currentKey, setCurrentKey] = useState(null);
  const [newAddedWords, setNewAddedWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wrongWords, setwrongWords] = useState([]);
  const [count, setCount] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [correctWords, setCorrectWords] = useState(null);

  useEffect(() => {
    setCurrentKeys(currentKey);
  }, [currentKey]);

  useEffect(() => {
    if (count > 0 && count <= 60 && isActive) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (count === 0) {
      setCorrectWords(newAddedWords.length);
    }
  }, [count, isActive]);

  const onChangeText = (e) => {
    setIsActive(true);
    setCurrentWord(e.target.value);
  };

  useEffect(() => {
    if (currentKey === " ") {
      setCurrentWord(" ");
      setCurrentIndex(currentIndex + 1);
      if (words[currentIndex] === currentWord.trim()) {
        setNewAddedWords([...newAddedWords, currentWord.trim()]);
      } else {
        setwrongWords([...wrongWords, words[currentIndex]]);
      }
    }
  }, [currentKey]);

  return (
    <>
      {count === 0 ? (
        <Result correctWords={correctWords} wrongWords={wrongWords} />
      ) : (
        <>
          <WordContainer
            currentIndex={currentIndex}
            words={words}
            newAddedWords={newAddedWords}
            wrongWords={wrongWords}
          />
        </>
      )}
      <CreateComponent
        currentWord={currentWord}
        onChangeText={onChangeText}
        setIsActive={setIsActive}
        setCurrentKey={setCurrentKey}
        count={count}
      />
    </>
  );
}

export default WordBox;
