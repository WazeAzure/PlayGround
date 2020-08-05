const button = document.querySelector('button');
const body = document.querySelector('body');
const input = document.getElementById('colorCode');

const getColor= ()=>{
  return input.value;
}

const AdjustColor= ()=>{
  body.style.backgroundColor= getColor();
}

button.addEventListener('click', AdjustColor);
