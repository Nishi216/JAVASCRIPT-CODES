const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

function random(min,max){
    const num = Math.floor(Math.random()*(max-min+1))+min;
    return num;
}


function ball(x,y,velx,vely,color,size){
    this.x=x;
    this.y=y;
    this.velx=velx;
    this.vely=vely;
    this.color=color;
    this.size=size;
}
ball.prototype.draw = function(){
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
    ctx.fill();
}
ball.prototype.update = function(){
    if((this.x+this.size)>=width){
        this.velx= -(this.velx);
    }
    if((this.x-this.size)<=0){
        this.velx= -(this.velx);
    }
    if ((this.y + this.size) >= height) {
        this.vely = -(this.vely);
    }
    
    if ((this.y - this.size) <= 0) {
        this.vely = -(this.vely);
     }
    
      this.x += this.velx;
      this.y += this.vely;
}
ball.prototype.collisiondetect = function(){
    for (let j = 0; j < balls.length; j++) {
        if (!(this === balls[j])) {
          const dx = this.x - balls[j].x;
          const dy = this.y - balls[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
    
          if (distance < this.size + balls[j].size) {
            balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
          }
        }
    }
}


let balls=[];
while(balls.length<25){
    let size = random(10,20);
    let ballobj = new ball(
        random(0+size,width-size),
        random(0+size,height-size),
        random(-10,10),
        random(-10,10),
        'rgb('+random(0,255)+','+random(0,255)+','+random(0,255)+')',
        size
    );
    balls.push(ballobj);
}

function loop(){
    ctx.fillStyle='rgba(0,0.25,0.50,0.25)';
    ctx.fillRect(0,0,width,height);
    for(let i=0;i<balls.length;i++){
        balls[i].draw();
        balls[i].update();
        balls[i].collisiondetect();
    }
    requestAnimationFrame(loop);
}

loop();

