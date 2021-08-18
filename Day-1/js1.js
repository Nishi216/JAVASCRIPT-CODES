// function is creating a new paragraph and appending it to the bottom of the html body

function createPara(){
    let para = document.createElement('p');
    para.textContent = 'Oh you clicked me!';
    document.body.appendChild(para);
}

/*
  1. Get references to all the buttons on the page in an array format.
  2. Loop through all the buttons and add a click event listener to each one.

  When any button is pressed, the createParagraph() function will be run.
*/

const buttons = document.querySelectorAll('button');

for(let i =0; i<buttons.length;i++){
    buttons[i].addEventListener('click',createPara);
}