//Hi, My name is Abraham and this is one of my projects.
// Kindly check me out at https://bio.link/abrahame

var wordValue = document.getElementById('wordValue');
var charValue = document.getElementById('charValue');

wordValue.innerHTML = 0;
charValue.innerHTML = 0;
var input = document.getElementById('input');

input.focus();


function update() {
  input.addEventListener('keyup', updateChar);
  input.addEventListener('keyup', updateWord);
  input.addEventListener('keyup', zeroValue);
  let diction2 = document.getElementById('diction');

function updateChar() {
let numValue = input.value.length;
let lastWord = document.getElementById('diction2');
if(numValue == 1){
  lastWord.innerHTML = "character";
}else{
  lastWord.innerHTML = "characters";
}

charValue.innerHTML = numValue;

}

function updateWord() {
  var charValue = input.value.trim().split(" ");
  
  charValue = charValue.length
  if(charValue == 1){
    diction2.innerHTML = "word";
  }else{
    diction2.innerHTML = "words";
  }

  wordValue.innerHTML = charValue;

  }
function zeroValue() {
  if (input.value.length == 0) {
    wordValue.innerHTML = 0;
    diction2.innerHTML = "words";
  } 
}

}

update();

