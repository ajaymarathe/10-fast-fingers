import React, { useEffect, useState } from "react";
import WordContainer from "./WordContainer";
import CreateComponent from "./CreateComponent";
import Result from "./Result";

function WordBox({ setCurrentKeys, paragraphs }) {
  const [currentWord, setCurrentWord] = useState("");
  const [currentKey, setCurrentKey] = useState(null);
  const [newAddedWords, setNewAddedWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wrongWords, setWrongWords] = useState([]);
  const [count, setCount] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [correctWords, setCorrectWords] = useState(null);
  const [words, setWords] = useState([]);

  useEffect(() => {
    setCurrentKeys(currentKey);
  }, [currentKey, setCurrentKeys]);

  useEffect(() => {
    generateWords();
  }, [paragraphs]);

  useEffect(() => {
    if (count > 0 && count <= 60 && isActive) {
      const timer = setTimeout(
        () => setCount((prevCount) => prevCount - 1),
        1000
      );
      return () => clearTimeout(timer);
    }
    if (count === 0) {
      setCorrectWords(newAddedWords.length);
    }
  }, [count, isActive]);


  const generateWords = () => {
    setCurrentIndex(0);
    setCorrectWords(null);
    setNewAddedWords([]);
    setWrongWords([]);
    setIsActive(false);
    setCount(60);
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    const randomParagraph = paragraphs[randomIndex];
    const wordsArray = randomParagraph.paragraph.split(" ");
    setWords(wordsArray);
  };

  const onChangeText = (e) => {
    setIsActive(true);
    setCurrentWord(e.target.value);
  };

  useEffect(() => {
    if (currentKey === " ") {
      setCurrentWord(" ");
      setCurrentIndex((prevIndex) => prevIndex + 1);
      if (words[currentIndex] === currentWord.trim()) {
        setNewAddedWords((prevWords) => [...prevWords, currentWord.trim()]);
      } else {
        setWrongWords((prevWords) => [...prevWords, words[currentIndex]]);
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
        onRefresh={generateWords}
      />
    </>
  );
}

export default WordBox;
