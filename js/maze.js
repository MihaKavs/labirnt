
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
  var car = new Image();
  car.src = "img/car.png";
  var right = new Image();
  right.src = "img/right.png";
  var left = new Image();
  left.src = "img/left.png";
  var up = new Image();
  up.src = "img/up.png";
  ctx.clearRect(x - 8, y - 8, 46, 46);
  if (rot == 1) {
    ctx.drawImage(car, x - 5, y - 5, 30, 40);
  } else if (rot == 2) {
    ctx.drawImage(right, x - 5, y - 5, 40, 30);
  }
  else if (rot == 3) {
    ctx.drawImage(left, x - 5, y - 5, 40, 30);
  }
  else if (rot == 4) {
    ctx.drawImage(up, x - 5, y - 5, 30, 40);
  }
  make_base();
  if (x == 390 && y >= 0 && y <= 10) {
    y += 0.2;
    rot = 1; 
  }
  if (x == 390 && y >= 10 && y <= 24) {
    y += 0.5;
    rot = 1;
  }
  if (x == 390 && y >= 24 && y <= 65) {
    y += 0.8;
    rot = 1;
    if(y > 64.5){
      y = 65;
    }
  }
  if (y == 65 && x >= 390 && x <= 440) {
    x += 2;
    rot = 2;
  }
  if (x == 440 && y >= 65 && y <= 175) {
    y += 2.5;
    rot = 1;
    if(y == 176)
      y = 175;
  }
  if (y == 175 && x >= 440 && x <= 495) {
    x += 2.5;
    rot = 2;
  }
  if (x == 495 && y >= 175 && y <= 225) {
    y += 3;
    rot = 1;
    if(y == 226)
      y = 225;
  }
  //right
  if (y == 225 && x >= 495 && x <= 545) {
    x += 3;
    rot = 2;
    if(x == 546)
      x = 545
  }
  //down
  if (x == 545 && y >= 225 && y <= 300) {
    y += 3;
    rot = 1;
    
  }
  if (x == 545 && y >= 303 && y <= 315) {
    y += 2;
    rot = 1;
  }
  if (x == 545 && y >= 317 && y <= 325) {
    y += 1.5;
    rot = 1;
    if(y == 326)
      y = 325;
  }
  //left
  if (y == 325 && x <= 545 && x >= 495) {
    x -= 1.5;
    rot = 3;
    if(x == 494)
      x = 495;
  }
  //up
  if (x == 495 && y <= 325 && y >= 275) {
    y -= 2;
    rot = 4;
  }
  if (y == 275 && x <= 495 && x >= 445) {
    x -= 1.5;
    rot = 3;
    if(x == 444)
      x = 445;
  }
  if (x == 445 && y >= 275 && y <= 291) {
    y += 2;
    rot = 1;
  }
  if (x == 445 && y >= 293 && y <= 323) {
    y += 3;
    rot = 1;
  }
  if (x == 445 && y >= 325 && y <= 445) {
    if(y == 326)
    ctx.clearRect(x - 8, y - 8, 46, 46);
    y += 4;
    rot = 1;
    if(y == 446)
      y = 445;
  }
  if (y == 445 && x >= 445 && x <= 478) {
    x += 3;
    rot = 2;
  }
  if (y == 445 && x >= 481 && x <= 495) {
    x += 2;
    rot = 2;
  }
  if (x == 495 && y >= 445 && y <= 495) {
    y += 2;
    rot = 1;
  }
  if (y == 495 && x <= 495 && x >= 435) {
    x -= 2;
    rot = 3;
  }
  if (x == 435 && y >= 495 && y <= 545) {
    y += 2;
    rot = 1;
  }
  if (y == 545 && x <= 435 && x >= 385) {
    x -= 2;
    rot = 3;
  }
  if (x == 385 && y <= 545 && y >= 435) {
    y -= 3;
    rot = 4;
    if(y == 434)
      y = 435;
  }
  if (y == 435 && x <= 385 && x >= 285) {
    x -= 3.5;
    rot = 3;
    if(x == 283.5)
      x = 285
  }
  //pit
  if (x == 285 && y <= 435 && y >= 325) {
    y -= 3;
    rot = 4;
    if(y == 324)
    y = 325;
    
  }
  if (y == 325 && x <= 285 && x >= 230) {
    x -= 3;
    rot = 3;
    if(x == 228)
      x = 230
  }
  if (x == 230 && y <= 325 && y >= 244) {
    y -= 3;
    rot = 4;
  }
  if (x == 230 && y <= 241 && y >= 231) {
    y -= 2;
    rot = 4;
  }
  if (x == 230 && y <= 229 && y >= 225) {
    y -= 1.5;
    rot = 4;
    if(y == 224.5)
      y = 225;
  }
  if (y == 225 && x <= 230 && x >= 180) {
    x -= 1.5;
    rot = 3;
    if(x == 179)
      x = 180;
  }
  if (x == 180 && y >= 225 && y <= 275) {
    y += 2;
    rot = 1;
  }
  if (y == 275 && x <= 180 && x >= 75) {
    x -= 3;
    rot = 3;
  }
  if (x == 75 && y >= 275 && y <= 395) {
    y += 3;
    rot = 1;
  }
  if (y == 395 && x <= 75 && x >= 20) {
    x -= 3;
    rot = 3;
    if(x == 18)
      x = 20;
  }
  if (x == 20 && y >= 395 && y <= 495) {
    y += 3;
    rot = 1;
    if(y == 494)
      y = 495;
  }
  if (y == 495 && x >= 20 && x <= 70) {
    x += 3;
    rot = 2;
    if(x == 71)
      x = 70;
  }
  if (x == 70 && y >= 495 && y <= 550) {
    y += 3;
    rot = 1;
    if(y == 552)
      y = 550
  }
  if (y == 550 && x >= 70 && x <= 120) {
    x += 2;
    rot = 2;
  }
  if (x == 120 && y >= 550 && y <= 600) {
    y += 1.5;
    rot = 1;
    if(y == 601)
      y = 600;
  }
  if (y == 600 && x <= 120 && x >= 15) {
    x -= 2;
    rot = 3;
    if(x == 14)
      x = 15;
  }
  if (x == 15 && y >= 600 && y <= 650) {
    y += 1.5;
    rot = 1;
    if(y == 651)
      y = 650;
  }
  if (y == 650 && x >= 15 && x <= 31) {
    x += 2;
    rot = 2;
  }
  if (y == 650 && x >= 33 && x <= 120) {
    x += 3;
    rot = 2;
  }
  if (x == 120 && y >= 650 && y <= 700) {
    y += 3;
    rot = 1;
    if(y == 701)
      y = 700;
  }
  if (y == 700 && x >= 120 && x <= 280) {
    x += 4;
    rot = 2;
  }
  if (x == 280 && y >= 700 && y <= 748) {
    y += 3;
    rot = 1;
  }
  if (x == 280 && y >= 751 && y <= 760) {
    y += 2;
    rot = 1;
    if(y == 761)
      y = 760;
  }
  if (y == 760 && x >= 280 && x <= 340) {
    x += 1.5;
    rot = 2;
  }
  if (x == 340 && y <= 760 && y >= 710) {
    y -= 2;
    rot = 4;
  }
  if (y == 710 && x >= 340 && x <= 390) {
    x += 2;
    rot = 2;
  }
  if (x == 390 && y <= 710 && y >= 660) {
    y -= 2;
    rot = 4;
  }
  if (y == 660 && x >= 390 && x <= 445) {
    x += 1.5;
    rot = 2;
    if(x == 445.5)
      x = 445;
  }
  if (x == 445 && y >= 660 && y <= 760) {
    y += 2;
    rot = 1;
  }
  if (y == 760 && x <= 445 && x >= 390) {
    x -= 3;
    rot = 3;
    if(x == 388)
      x = 390;
  }
  if (x == 390 && y >= 760 && y <= 780) {
    y += 3;
    rot = 1;
    console.log(y);
    if (y == 781){
      finish();
      clearInterval(myInterval);
    }
  }
}
function start(){
  window.myInterval = setInterval(drawIt, 60);
  clearTimeout(myTimeout);
}
function restart(){
  clearInterval(window.myInterval);
  var myInterval = setInterval(drawIt, 60);
}

Swal.fire({
  title: 'Formula 1 maze animation',
  confirmButtonText: 'Start animation!',
  confirmButtonColor: '#42433e',
}).then((result) => {
  var audio = new Audio('sound/lights.mp3');
  audio.play();
  console.log(1);
  var myTimeout = setTimeout(start, 5500);
  console.log(2);
  var playstart = setTimeout(playStart, 600);

})
function playStart(){
  var start = new Audio('sound/start.mp3');
  start.play();
}
function clear(){
  clearTimeout(myTimeout);
  clearTimeout(myTimeout2);
  clearInterval(myInterval);
}

function finish() {
  Swal.fire({
    title: 'You finished P1!',
    confirmButtonText: 'Start again',
    confirmButtonColor: '#42433e',
  }).then((result) => {
    x = 390;
    y = 0;
    var audio = new Audio('sound/lights.mp3');
    audio.play();
    var myTimeout = setTimeout(restart, 5500);
    var playstart = setTimeout(playStart, 600);
  })

}