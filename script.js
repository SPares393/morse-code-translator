// prettier-ignore
const charactersEnglish = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",1,2,3,4,5,6,7,8,9,0," ",".",",",":","?","'","-","/"];

// prettier-ignore
const charactersMorse = ["*-","-***","-*-*","-**","*","**-*","--*","****","**","*---","-*-","*-**","--","-*","---","*--*","--*-","*-*","***","-","**-","***-","*--","-**-","-*--","--**","*----","**---","***--","****-","*****","-****","--***","---**","----*","-----","   ","*-*-*-","--**--","---***","**--**","*----*","-****-","-**-*"];

const inputs = document.querySelectorAll(".input");
const inputEnglish = document.querySelector(".input__english");
const inputMorse = document.querySelector(".input__morse");
const buttonTranslateEnglish = document.querySelector(
  ".button__translate--english"
);
const buttonTranslateMorse = document.querySelector(
  ".button__translate--morse"
);

const translateEnglish = () => {
  const getCharacters = inputEnglish.value.split("");
  const translateCharacters = getCharacters.map((i) => {
    const ch = charactersEnglish.indexOf(i.toUpperCase());
    return charactersMorse[ch];
  });
  inputMorse.value = translateCharacters.join(" ");
};

const translateMorse = () => {
  const getCharacters = inputMorse.value.split(" ");
  const translateCharacters = getCharacters.map((i) => {
    const ch = charactersMorse.indexOf(i.toUpperCase());
    return charactersEnglish[ch].toLowerCase();
  });
  inputEnglish.value = translateCharacters.join("");
};

buttonTranslateEnglish.addEventListener("click", translateEnglish);

buttonTranslateMorse.addEventListener("click", translateMorse);
