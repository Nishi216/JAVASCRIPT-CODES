const select = document.getElementById('calender');
const list = document.querySelector('ul');
const heading = document.querySelector('h1');

select.onchange = function(){
    const choice = select.value;
    let days = 31;
    if(choice==='february'){
        days=28;
    }
    else if(choice==='april'||choice==='june'||choice==='september'||choice==='november'){
        days=30;
    }
    createCalender(days,choice);
}

function createCalender(days,choice){
    list.innerHTML='';
    heading.textContent = choice;
    for(let i=1;i<=days;i++){
        const items = document.createElement('li');
        items.textContent=i;    
        list.appendChild(items);
    }
}

createCalender(31,'january');