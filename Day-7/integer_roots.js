const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', searchroots);

function searchroots()
{
  let num = input.value;
  input.value = '';
  input.focus();
  for (let i = 1; i <=num; i++) {
    let sqroot = Math.sqrt(i);
    if(Math.floor(sqroot)!==sqroot){
        continue;
    }
    para.textContent += i + '  ';
  }
}