
var canvas = document.getElementById('maze');
var ctx = canvas.getContext('2d');
ctx.scale(1, 1);
make_base();

function make_base() {
  base_image = new Image();
  base_image.src = 'img/maze.png';
  base_image.onload = function () {
    ctx.drawImage(base_image, 0, 0);
  }
}
drawIt();
var y = 0;
var x = 390;
var rot = 1;
var car = new Image();
car.src = "img/car.png";
function drawIt() {
  var canvas = document.getElementById('maze');
  var c = canvas.getContext('2d');
  var car = new Image();
  car.src = "img/car.png";
  var right = new Image();
  right.src = "img/right.png";
  var left = new Image();
  left.src = "img/left.png";
  var up = new Image();
  up.src = "img/up.png";
  ctx.clearRect(x - 8, y - 8, 46, 46);
  if (rot == 1){
    ctx.drawImage(car, x - 5, y - 5, 30, 40);
  }else if(rot == 2){
    ctx.drawImage(right, x - 5, y - 5, 40, 30);
  }
  else if(rot == 3){
    ctx.drawImage(left, x - 5, y - 5, 40, 30);
  }
  else if(rot == 4){
    ctx.drawImage(up, x - 5, y - 5, 30, 40);
  }
  make_base();
  if (x == 390 && y >= 0 && y <= 10){
    y += 1;
    rot = 1;
  }
  if (x == 390 && y >= 10 && y <= 24){
    y += 2;
    rot = 1;
  }
  if (x == 390 && y >= 25 && y <= 65){
    y += 3;
    rot = 1;
    console.log(y);
  }
  if (y == 65 && x >= 390 && x <= 440){
    x += 5;
    rot = 2;
  }
  if (x == 440 && y >= 65 && y <= 175){
    y += 5;
    rot = 1;
  }
  if (y == 175 && x >= 440 && x <= 495){
    x += 5;
    rot = 2;
  }
  if (x == 495 && y >= 175 && y <= 225){
    y += 5;
    rot = 1;
  }
  //right
  if (y == 225 && x >= 495 && x <= 545){
    x += 5;
    rot = 2;
  }
  //down
  if (x == 545 && y >= 225 && y <= 325){
    y += 5;
    rot = 1;
  }
  //left
  if (y == 325 && x <= 545 && x >= 495){
    x -= 5;
    rot = 3;
  }
  //up
  if (x == 495 && y <= 325 && y >= 275){
    y -= 5;
    rot = 4;
  }
  if (y == 275 && x <= 495 && x >= 445){
    x -= 5;
    rot = 3;
  }
  if (x == 445 && y >= 275 && y <= 445){
    y += 5;
    rot = 1;
  }
  if (y == 445 && x >= 445 && x <= 495){
    x += 5;
    rot = 2;
  }
  if (x == 495 && y >= 445 && y <= 495){
    y += 5;
    rot = 1;
  }
  if (y == 495 && x <= 495 && x >= 435){
    x -= 5;
    rot = 3;
  }
  if (x == 435 && y >= 495 && y <= 545){
    y += 5;
    rot = 1;
  }
  if (y == 545 && x <= 435 && x >= 385){
    x -= 5;
    rot = 3;
  }
  if (x == 385 && y <= 545 && y >= 435){
    y -= 5;
    rot = 4;
  }
  if (y == 435 && x <= 385 && x >= 285){
    x -= 5;
    rot = 3;
  }
  if (x == 285 && y <= 435 && y >= 325){
    y -= 5;
    rot = 4;
  }
  if (y == 325 && x <= 285 && x >= 230){
    x -= 5;
    rot = 3;
  }
  if (x == 230 && y <= 325 && y >= 225){
    y -= 5;
    rot = 4;
  }
  if (y == 225 && x <= 230 && x >= 180){
    x -= 5;
    rot = 3;
  }
  if (x == 180 && y >= 225 && y <= 275){
    y += 5;
    rot = 1;
  }
  if (y == 275 && x <= 180 && x >= 75){
    x -= 5;
    rot = 3;
  }
  if (x == 75 && y >= 275 && y <= 395){
    y += 5;
    rot = 1;
  }
  if (y == 395 && x <= 75 && x >= 20){
    x -= 5;
    rot = 3;
  }
  if (x == 20 && y >= 395 && y <= 495){
    y += 5;
    rot = 1;
  }
  if (y == 495 && x >= 20 && x <= 70){
    x += 5;
    rot = 2;
  }
  if (x == 70 && y >= 495 && y <= 550){
    y += 5;
    rot = 1;
  }
  if (y == 550 && x >= 70 && x <= 120){
    x += 5;
    rot = 2;
  }
  if (x == 120 && y >= 550 && y <= 600){
    y += 5;
    rot = 1;
  }
  if (y == 600 && x <= 120 && x >= 15){
    x -= 5;
    rot = 3;
  }
  if (x == 15 && y >= 600 && y <= 650){
    y += 5;
    rot = 1;
  }
  if (y == 650 && x >= 15 && x <= 120){
    x += 5;
    rot = 2;
  }
  if (x == 120 && y >= 650 && y <= 700){
    y += 5;
    rot = 1;
  }
  if (y == 700 && x >= 120 && x <= 280){
    x += 5;
    rot = 2;
  }
  if (x == 280 && y >= 700 && y <= 760){
    y += 5;
    rot = 1;
  }
  if (y == 760 && x >= 280 && x <= 340){
    x += 5;
    rot = 2;
  }
  if (x == 340 && y <= 760 && y >= 710){
    y -= 5;
    rot = 4;
  }
  if (y == 710 && x >= 340 && x <= 390){
    x += 5;
    rot = 2;
  }
  if (x == 390 && y <= 710 && y >= 665){
    y -= 5;
    rot = 4;
  }
  if (y == 665 && x >= 390 && x <= 445){
    x += 5;
    rot = 2;
  }
  if (x == 445 && y >= 665 && y <= 760){
    y += 5;
    rot = 1;
  }
  if (y == 760 && x <= 445 && x >= 390){
    x -= 5;
    rot = 3;
  }
  if (x == 390 && y >= 760 && y <= 780){
    y += 5;
    rot = 1;
    if(y==780)
      clearTimeout(drawIt);
  }
}
setInterval(drawIt, 60);


