const button = document.querySelector('button');
const $body = document.querySelector('body');

function RandomNumber(colorLib=16777216){
  return Math.floor(Math.random() * Math.floor(colorLib));
}

function colorPalette(colorCode){
  document.getElementById('body-bg').style.backgroundColor = colorCode.toString(16);
  document.getElementById('btn-bg').style.backgroundColor = `#${(16777216-colorCode).toString(16)}`;
  document.getElementById('btn-border').style.backgroundColor = `#${Math.abs(8388608-colorCode).toString(16)}`;
}

function textColor(colorCode){
  document.getElementById('body-bg').innerHTML = `#${colorCode.toString(16)}`;
  document.getElementById('btn-bg').innerHTML = `#${(16777216-colorCode).toString(16)}`;
  document.getElementById('btn-border').innerHTML = `#${Math.abs(8388608-colorCode).toString(16)}`;
}

function RandomColor(){
  var colorCode= RandomNumber();
  colorPalette(colorCode);
  textColor(colorCode);
  $body.style.backgroundColor = `#${colorCode.toString(16)}`;
  button.style.backgroundColor = `#${(16777216-colorCode).toString(16)}`;
  button.style.border = `2vh solid #${Math.abs(8388608-colorCode).toString(16)}`;
  button.style.color = `#${colorCode.toString(16)}`;
}

button.addEventListener('click', RandomColor);
