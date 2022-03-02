
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
var dx = 10;
var dy = 10;
var y = 0;
var x = 390;
var lap = 1;
var car = new Image();
car.src = "img/car.png";
var right = new Image();
right.src = "img/right.png";
var left = new Image();
left.src = "img/left.png";
var up = new Image();
up.src = "img/up.png";
var arr = [
  [70, 440, 180, 500, 240, 560, 330, 500, 290, 440, 450, 500, 500, 440, 550, 390, 440, 280, 330, 230, 230, 180, 290, 70, 400, 20, 500, 70, 550, 120, 600, 20, 660, 120, 710, 290, 760, 340, 710, 390, 660, 450, 760, 390, 780],
  [1, 2, 1, 2, 1, 2, 1, 3, 4, 3, 1, 2, 1, 3, 1, 3, 4, 3, 4, 3, 4, 3, 1, 3, 1, 3, 1, 2, 1, 2, 1, 3, 1, 2, 1, 2, 1, 2, 4, 2, 4, 2, 1, 3, 1]
];
make_base();
var pos = 0;
var end = 0;
var dir = 0;
function arrThrough() {
  if (pos == arr[1].length - 1 && lap == 4)
    finish();
  else if (pos == arr[1].length && lap == 4)
    return;
  if (pos == arr[1].length && lap != 4) {
    y = 0;
    x = 390;
    pos = 0;
    lap++;
    document.getElementById("lapsDisplay").innerHTML = lap + "/4";
    ctx.clearRect(370, 760, 30, 30);
  }
  if (lap == 3) {
    dx = 5;
    dy = 5;
    if (pos == 1)
      safetycar.play();
    else if (pos == 20)
      safetycarin.play();
  } else {
    dy = 10;
    dx = 10;
  }
  ctx.clearRect(x - 15, y - 15, 50, 50);
  dir = arr[1][pos];
  end = arr[0][pos];
  goThrough();
}
function goThrough() {
  if (dir == 1) {
    gdown();
  } else if (dir == 2) {
    gright();
  } else if (dir == 3) {
    gleft();
  }
  else {
    gup();
  }
}
function gdown() {
  ctx.clearRect(x - 5, y - 15, 15, 30);
  make_base();
  ctx.drawImage(car, x - 5, y - 5, 15, 30);
  y += dy;
  if (y == end) {
    pos++;
    arrThrough();
  } else {
    setTimeout(function () {
      gdown()
    }, 20);
  }
}
function gup() {
  ctx.clearRect(x - 5, y - 5, 20, 40);
  make_base();
  ctx.drawImage(up, x - 5, y - 5, 15, 30);
  y -= dy;
  if (y == end) {
    pos++;
    arrThrough();
  } else {
    setTimeout(function () {
      gup()
    }, 20);
  }
}
function gright() {
  ctx.clearRect(x - 15, y - 5, 30, 15);
  make_base();
  ctx.drawImage(right, x - 5, y - 5, 30, 15);
  x += dx;
  if (x == end) {
    pos++;
    arrThrough();
  } else {
    setTimeout(function () {
      gright()
    }, 20);
  }
}
function gleft() {
  ctx.clearRect(x - 5, y - 5, 40, 20);
  make_base();
  ctx.drawImage(left, x - 5, y - 5, 30, 15);
  x -= dx;
  if (x == end) {
    pos++;
    arrThrough();
  } else {
    setTimeout(function () {
      gleft()
    }, 20);
  }
}


window.safetycar = new Audio('sound/safetycar.m4a');
window.safetycarin = new Audio('sound/in.m4a');
function audioLoop() {
  window.noise = new Audio('sound/start.mp3');
  noise.loop = true;
}
function start() {
  audioLoop();
  arrThrough();
}
function restart() {
  pos = 0;
  lap = 1;
  ctx.clearRect(370, 760, 30, 30);
  document.getElementById("lapsDisplay").innerHTML = lap + "/4";
  arrThrough();
}
function clearLights() {
  document.getElementById("ena").style.backgroundColor = "#42433e";
  document.getElementById("2").style.backgroundColor = "#42433e";
  document.getElementById("3").style.backgroundColor = "#42433e";
  document.getElementById("4").style.backgroundColor = "#42433e";
  document.getElementById("5").style.backgroundColor = "#42433e";
}
Swal.fire({
  title: 'Formula 1 maze animation',
  confirmButtonText: 'Start animation!',
  confirmButtonColor: '#42433e',
  closeOnClickOutside: false,
}).then((result) => {
  var audio = new Audio('sound/lights.mp3');
  audio.play();
  setTimeout(() => { document.getElementById("ena").style.backgroundColor = "red" }, 550);
  setTimeout(() => { document.getElementById("2").style.backgroundColor = "red" }, 1550);
  setTimeout(() => { document.getElementById("3").style.backgroundColor = "red" }, 2550);
  setTimeout(() => { document.getElementById("4").style.backgroundColor = "red" }, 3550);
  setTimeout(() => { document.getElementById("5").style.backgroundColor = "red" }, 4550);
  setTimeout(clearLights, 5500);
  document.getElementById("lapsDisplay").innerHTML = lap + "/4";
  var myTimeout = setTimeout(start, 5500);
  var playstart = setTimeout(playStart, 600);
})
function playStart() {
  var start = new Audio('sound/start.mp3');
  start.play();
}
function finish() {
  var win = new Audio('sound/win.mp3');
  win.play();
  Swal.fire({
    title: 'You finished P1!',
    confirmButtonText: 'Start again',
    confirmButtonColor: '#42433e',
    closeOnClickOutside: false,
  }).then((result) => {
    x = 390;
    y = 0;
    var audio = new Audio('sound/lights.mp3');
    audio.play();
    setTimeout(() => { document.getElementById("ena").style.backgroundColor = "red" }, 550);
    setTimeout(() => { document.getElementById("2").style.backgroundColor = "red" }, 1550);
    setTimeout(() => { document.getElementById("3").style.backgroundColor = "red" }, 2550);
    setTimeout(() => { document.getElementById("4").style.backgroundColor = "red" }, 3550);
    setTimeout(() => { document.getElementById("5").style.backgroundColor = "red" }, 4550);
    setTimeout(clearLights, 5500);
    var myTimeout = setTimeout(restart, 5500);
    var playstart = setTimeout(playStart, 600);
  })
}