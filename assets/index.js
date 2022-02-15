var message = document.getElementById('message');
message.innerHTML = 0;
var input = document.getElementById('input');

input.focus();






input.addEventListener('keyup', update);

function update() {
let numValue = input.value.length;
let lastWord = document.getElementById('diction');
if(numValue == 1){
  lastWord.innerHTML = "word";
}else{
  lastWord.innerHTML = "words";
}

message.innerHTML = numValue;
return numValue;
}


