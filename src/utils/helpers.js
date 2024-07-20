export function addRandomLetters(word) {
  function shuffleString(str) {
    const array = str.split(" ").join("").split("");
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let result = word;

  for (let i = 0; i < 26 - word.length; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    result += letters[randomIndex];
  }
  return shuffleString(result);
}
