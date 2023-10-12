let canvas = document.getElementById("canvas");
canvas.width = innerWidth;

canvas.height = innerHeight;
let ballCount = window.prompt("ball count");



function Circle(x,y,dx,dy,radius,color,stroke) { 

    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.stroke = stroke;
    this.draw = function () { 
        cxt.fillStyle = `${color}`;
        cxt.beginPath();
        cxt.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        cxt.strokeStyle = `${stroke}`;
        cxt.fill();
        cxt.stroke();
    }
    this.update = function () { 
  // console.log("hi");
  if (this.x+this.radius+23>innerWidth-4 || 0+this.radius+1>this.x) { 
    this.dx = -this.dx;
}
if (this.y+this.radius+23>innerHeight-4 || 0+this.radius+1>this.y) { 
    this.dy = -this.dy;
}
// radius = radius + .01;
// color++;
// console.log(color);
this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }


}


circleArray = [];
colorArray = ['#DFFF00', '#FFBF00', '#FF7F50', '#DE3163', '#CCCCFF', '#6495ED', '#9FE2BF', '#40E0D0', '#ee82ee', '#6a5acd', '#ff2345', '#ffe025','#fc76bb','#ffc6eb'];

for (let i = 0; i < ballCount; i++) {
    let color = colorArray[Math.floor(Math.random() * colorArray.length)];//generates 0-14 Random Numbers
    let stroke = colorArray[Math.floor(Math.random() * colorArray.length)];//generates 0-14 Random Numbers
    //  let radius = Math.random()*(100-30)+30;//generates number between 30 to 100
    let radius = 30;
    let x = Math.random()*(innerWidth-radius*4)+radius*2;
    let y = Math.random()*(innerHeight-radius*4)+radius*2;
    let dx = Math.random()-.5*5;//xvelocity
    let dy = Math.random()-.5*5;//yvelocity
    circleArray.push(new Circle(x, y, dx, dy, radius,color,stroke));
    
}
// console.log(circleArray);
    



let cxt = canvas.getContext("2d");
let x = 100// Math.random()*(innerWidth-radius*2)+radius;
let dx = 10;
let y = 100;//Math.random()*(innerWidth-radius*2)+radius;
let dy = 10 ;
// console.log(dx);
// console.log(dy);
function animate() { 
    requestAnimationFrame(animate);
    
    cxt.clearRect(0, 0, innerWidth, innerHeight);
    // c.draw();
    // c.update();
    for (let i = 0; i < circleArray.length; i++) {
        // circleArray[i].draw();
        circleArray[i].update();
        // console.log(circleArray);
    }
}

animate();

window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
});