//   ".": "*-*-*-"
//   ",": "--**--"
//   ":": "---***"
//   "?": "**--**"
//   "'": "*----*"
//   "-": "-****-"
//   "/": "-**-*"

const charactersEnglish = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  " ",
  ".",
  ",",
  ":",
  "?",
  "'",
  "-",
  "/",
];

const charactersMorse = [
  "*-",
  "-***",
  "-*-*",
  "-**",
  "*",
  "**-*",
  "--*",
  "****",
  "**",
  "*---",
  "-*-",
  "*-**",
  "--",
  "-*",
  "---",
  "*--*",
  "--*-",
  "*-*",
  "***",
  "-",
  "**-",
  "***-",
  "*--",
  "-**-",
  "-*--",
  "--**",
  "*----",
  "**---",
  "***--",
  "****-",
  "*****",
  "-****",
  "--***",
  "---**",
  "----*",
  "-----",
  "   ",
  "*-*-*-",
  "--**--",
  "---***",
  "**--**",
  "*----*",
  "-****-",
  "-**-*",
];

const inputs = document.querySelectorAll(".input");
const inputEnglish = document.querySelector(".input__english");
const inputMorse = document.querySelector(".input__morse");
const buttonTranslate = document.querySelector(".button__translate");

const translateInput = () => {
  const getCharacters = inputEnglish.value.split("");
  const translateCharacters = getCharacters.map((i) => {
    const ch = charactersEnglish.indexOf(i.toUpperCase());
    return charactersMorse[ch];
  });
  inputMorse.value = translateCharacters.join(" ");
};

buttonTranslate.addEventListener("click", translateInput);
