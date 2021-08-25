const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ['images/pic1.jpg','images/pic2.jpg','images/pic3.jpg','images/pic4.jpg','images/pic5.jpg'];
for(let i=0;i<images.length;i++){
    const newimg = document.createElement('img');
    newimg.setAttribute('src',images[i]);
    thumbBar.appendChild(newimg);
    newimg.onclick = function(e){
        displayedImage.src = e.target.src;
    }
}

btn.onclick = function(){
    const btnclass = btn.getAttribute('class');
    if(btnclass==='dark'){
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else{
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}
