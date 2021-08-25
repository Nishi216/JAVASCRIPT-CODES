const button = document.querySelector('button');

function random(number){
    return Math.floor(Math.random()*(number-1));
}

function bgchange(){
    const randomColour = 'rgb('+random(255)+','+random(255)+','+random(255)+')';
    document.body.style.backgroundColor = randomColour;
}

button.onclick = bgchange;