'use strict';

// setInterval(() => {
//   const main = document.getElementsByClassName('block');
//   const mainBlock = document.querySelector('.main_conteiner');
//   const ifItsLast = [];
    
//   for (let j = 0; j < main.length; j++) {
//     if (main[j].offsetLeft > main[main.length - 1].offsetLeft) {
//       ifItsLast.push(main[j].offsetLeft);
//     }
//   }
    
//   if(ifItsLast.length >= 1) {
//     mainBlock.classList.remove('center_content');
//     mainBlock.classList.add("left_content");
//   }	else {
//     mainBlock.classList.remove('left_content');
//     mainBlock.classList.add("center_content");
//   }
// }, 20);

const main = document.getElementsByClassName('block');
const mainBlock = document.querySelector('.main_conteiner');
window.onresize = function(event) {
    const ifItsLast = [];
      
    for (let j = 0; j < main.length; j++) {
      if (main[j].offsetLeft > main[main.length - 1].offsetLeft) {
        ifItsLast.push(main[j].offsetLeft);
      }
    }  
    if(ifItsLast.length >= 1) {
      mainBlock.classList.remove('center_content');
      mainBlock.classList.add("left_content");
    }	else {
      mainBlock.classList.remove('left_content');
      mainBlock.classList.add("center_content");
    }
    console.log(event); 
};

const button = document.getElementById('but');
let div = document.createElement("div");
div.className ='block';

button.onclick = () => {
  let div = document.createElement("div");
  div.className ='block';
  mainBlock.appendChild(div);
}

