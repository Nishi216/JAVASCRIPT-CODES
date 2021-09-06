const header = document.querySelector('header');
const section = document.querySelector('section');


let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let request = new XMLHttpRequest();
request.open('GET',requestURL);
request.responseType = 'json';   //request.responseType = 'text'
request.send();
request.onload = function(){
    const superHeroes = request.response;  //const superheroText = request.response; //const superhero = JSON.parse(superheroText);
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}


function populateHeader(obj){
    const myH1 = document.createElement('h1');
    myH1.textContent = obj['squadName'];
    header.appendChild(myH1);
    const para = document.createElement('p');
    para.textContent = 'Hometown:  '+obj['homeTown']+' // Formed: ' + obj['formed'];
    header.appendChild(para);
}

function showHeroes(obj){
    const heroes = obj['members'];

    for(let i=0;i<heroes.length;i++){
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const para1 = document.createElement('p');
        const para2 = document.createElement('p');
        const para3 = document.createElement('p');
        const mylist = document.createElement('ul');

        h2.textContent = heroes[i].name;
        para1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        para2.textContent = 'Age: ' + heroes[i].age;
        para3.textContent = 'Superpowers:';

        const superPowers = heroes[i].powers;
        for (let j = 0; j < superPowers.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            mylist.appendChild(listItem);
        }

        article.appendChild(h2);
        article.appendChild(para1);
        article.appendChild(para2);
        article.appendChild(para3);
        article.appendChild(mylist);

        section.appendChild(article);
    }
}

