const select = document.querySelector('select');
const html = document.querySelector('h1');

select.onchange = function() {
  const choice = select.value;
  let back='';
  let text='';
  switch(choice){
	case 'white':
		back = 'white';
		text = 'black';
		update(back, text);
		break;
	case 'black':
		back = 'black';
		text = 'white';
		update(back, text);
		break;
	case 'purple':
		back = 'purple';
		text = 'white';
		update(back, text);
		break;
	case 'yellow':
		back = 'yellow';
		text = 'black';
		update(back, text);
		break;
	case 'psychedelic':
		back = 'lime';
		text = 'black';
		update(back, text);
		break;
	}
}

function update(bgColor, textColor) {
  document.body.style.backgroundColor = bgColor;
  html.style.color = textColor;
}