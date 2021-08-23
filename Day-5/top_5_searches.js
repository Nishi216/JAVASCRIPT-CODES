const list = document.querySelector('ul');
const search = document.querySelector('input');
const button = document.querySelector('button');

list.innerHTML = '';
let myhistory = [];

button.onclick = function(){
    if (search.value !== ''){
        myhistory.unshift(search.value);
    
    list.innerHTML='';

    for(let i=0; i<myhistory.length;i++){
        const listitem = document.createElement('li');
        listitem.textContent = myhistory[i];
        list.appendChild(listitem);
    }
    
    if(myhistory.length>=5){
        myhistory.pop();
    }

    search.value='';
    search.focus();
    }
}