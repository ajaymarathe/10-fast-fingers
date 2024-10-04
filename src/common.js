function generateRandomWords(count = 50) {
  const wordList = [
    "apple", "banana", "cat", "dog", "elephant", "fish", "grape", "hat", "ice", "jacket", "kite", "lemon", "mouse",
    "notebook", "orange", "pencil", "queen", "rabbit", "star", "table", "umbrella", "violin", "whale", "xylophone",
    "yarn", "zebra", "ball", "car", "doll", "ear", "frog", "goat", "house", "igloo", "jug", "key", "lamp", "moon",
    "nest", "owl", "pen", "quiz", "rose", "sun", "tree", "uncle", "vase", "wind", "xray", "yogurt", "zero",
    "alien", "beach", "cloud", "drum", "egg", "fire", "garden", "hero", "island", "jungle", "kangaroo", "leaf",
    "mountain", "nurse", "ocean", "pirate", "queen", "rain", "ship", "tiger", "unicorn", "volcano", "wolf", "yacht", "zephyr"
];

const randomWords = [];
for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    if(!randomWords.includes(wordList[randomIndex])) {
      randomWords.push(wordList[randomIndex]);
    } else {
      randomWords.push(wordList[randomIndex] + 'r');
    }
}

return randomWords;
}


export { generateRandomWords };