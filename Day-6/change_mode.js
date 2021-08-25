const select = document.getElementById('change');
const html = document.querySelector('h2')

function update(backColour, textColour){
    document.body.style.backgroundColor = backColour;
    html.style.color = textColour;
}

select.onchange =  function(){
    (select.value==='black')?update('black','white'):update('white','black');
}