let myArray = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

let score = 0;
let score1 = 0;
let score2 = 0;
let score3 = 0;
let score4 = 0;
let recordScore = 0;
let allNumber = true;
let arrNow = [];

let id00 = document.getElementById('id00');
let id01 = document.getElementById('id01');
let id02 = document.getElementById('id02');
let id03 = document.getElementById('id03');

let id10 = document.getElementById('id10');
let id11 = document.getElementById('id11');
let id12 = document.getElementById('id12');
let id13 = document.getElementById('id13');

let id20 = document.getElementById('id20');
let id21 = document.getElementById('id21');
let id22 = document.getElementById('id22');
let id23 = document.getElementById('id23');

let id30 = document.getElementById('id30');
let id31 = document.getElementById('id31');
let id32 = document.getElementById('id32');
let id33 = document.getElementById('id33');

contentGame();
newGame();


document.getElementById('newGame').onclick = function(){newGame();};


window.onkeydown = function move_right() {
  if (event.keyCode === 39){ // Вправо
    moveRight();
  } else if (event.keyCode === 37) { // влево
    moveLeft();
  } else if (event.keyCode === 40){ // вниз
    moveDown();
  } else if (event.keyCode === 38) { // вверх
    moveTop();
  }
};

// undefined

const table = document.getElementById('table');
//const ctx = table.getContext('2d');

const sensitivity = 2;



let touchStart = null;
let touchPosition = null;



table.addEventListener('touchstart', function(e){TouchStart(e);});
table.addEventListener('touchmove', function(e){TouchMove(e);});
table.addEventListener('touchend', function(e){TouchEnd(e);});


function TouchStart(e){
  e.preventDefault();
  touchstart = {
    x: e.changedTouches[0].clientX,
    y: e.changedTouches[0].clientY
  };
};

function TouchMove(e){
  touchPosition = {
    x: e.changedTouches[0].clientX,
    y: e.changedTouches[0].clientY
  }

};

function TouchEnd(e){

  CheckAction();


  touchstart = null;
  touchPosition = null;

   table.ondragstart = function(){
      return false;
    }

};

function CheckAction(){
  let d = {
    x: touchstart.x - touchPosition.x,
    y: touchstart.y - touchPosition.y
  };

if (Math.abs(d.x) > Math.abs(d.y)) {
  if (d.x > 0){ // налево
    moveLeft();
  }  else {
    moveRight();
  };
} else {
  if (d.y > 0){
    moveTop();
  } else {
    moveDown();
  };
};

};



function moveLeft(){ // Влево

for (let i = 0; i <= 3; i++){

//нули
if (myArray[i][0] == 0 && myArray[i][1] != 0 && myArray[i][2] != 0) { //011
  myArray[i][0] = myArray[i][1];
  myArray[i][1] = myArray[i][2];
  myArray[i][2] = myArray[i][3];
  myArray[i][3] = 0; 
} else if (myArray[i][0] == 0 && myArray[i][1] == 0 && myArray[i][2] != 0) { //001
  myArray[i][0] = myArray[i][2];
  myArray[i][1] = myArray[i][3];
  myArray[i][2] = 0;
  myArray[i][3] = 0;
} else if(myArray[i][0] == 0 && myArray[i][1] == 0 && myArray[i][2] == 0){//000
  myArray[i][0] = myArray[i][3];
  myArray[i][1] = 0;
  myArray[i][2] = 0;
  myArray[i][3] = 0;
} else if (myArray[i][0] != 0 && myArray[i][1] == 0 && myArray[i][2] != 0){//101
  myArray[i][1] = myArray[i][2];
  myArray[i][2] = myArray[i][3];
  myArray[i][3] = 0;
} else if (myArray[i][0] != 0 && myArray[i][1] != 0 && myArray[i][2] == 0){ //110
  myArray[i][2] = myArray[i][3];
  myArray[i][3] = 0;
} else if (myArray[i][0] == 0 && myArray[i][1] != 0 && myArray[i][2] == 0){ //010
  myArray[i][0] = myArray[i][1];
  myArray[i][1] = myArray[i][3];
  myArray[i][2] = 0;
  myArray[i][3] = 0;
} else if (myArray[i][0] != 0 && myArray[i][1] == 0 && myArray[i][2] == 0 && myArray[i][3] != 0){ //1001
  myArray[i][0] = myArray[i][0];
  myArray[i][1] = myArray[i][3];
  myArray[i][2] = 0;
  myArray[i][3] = 0;
};

//первая строчка влево ходы
if (myArray[i][0] != myArray[i][1] && myArray[i][1] == myArray[i][2]){
  myArray[i][1] = myArray[i][1] + myArray[i][2];
  myArray[i][2] = myArray[i][3];
  myArray[i][3] = 0;
  score1 = score1 + myArray[i][1];
} else if (myArray[i][0] == myArray[i][1] && myArray[i][2] != myArray[i][3]){
  myArray[i][0] = myArray[i][0] + myArray[i][1];
  myArray[i][1] = myArray[i][2];
  myArray[i][2] = myArray[i][3];
  myArray[i][3] = 0;
  score2 = score2 + myArray[i][0];
} else if (myArray[i][0] != myArray[i][1] && myArray[i][2] == myArray[i][3]){
  myArray[i][2] = myArray[i][2] + myArray[i][3];
  myArray[i][3] = 0;
  score3 = score3 + myArray[i][2];
} else if (myArray[i][0] == myArray[i][1] && myArray[i][2] == myArray[i][3]){
  myArray[i][0] = myArray[i][0] + myArray[i][1];
  myArray[i][1] = myArray[i][2] + myArray[i][3];
  myArray[i][2] = 0;
  myArray[i][3] = 0;
  score4 = score4 + myArray[i][0] + myArray[i][1];
}
};

score = score1 + score2 + score3 + score4;

gameOver();
randomGame();
colorNumber();
contentGame();

};

function moveRight(){ //вправо

for (let i = 0; i <= 3; i++){

//нули Вправо
if (myArray[i][3] == 0 && myArray[i][2] != 0 && myArray[i][1] != 0) {
  myArray[i][3] = myArray[i][2];
  myArray[i][2] = myArray[i][1];
  myArray[i][1] = myArray[i][0];
  myArray[i][0] = 0; 
} else if (myArray[i][3] == 0 && myArray[i][2] == 0 && myArray[i][1] != 0) {
  myArray[i][3] = myArray[i][1];
  myArray[i][2] = myArray[i][0];
  myArray[i][1] = 0;
  myArray[i][0] = 0;
} else if(myArray[i][3] == 0 && myArray[i][2] == 0 && myArray[i][1] == 0){
  myArray[i][3] = myArray[i][0];
  myArray[i][2] = 0;
  myArray[i][1] = 0;
  myArray[i][0] = 0;
} else if (myArray[i][3] != 0 && myArray[i][2] == 0 && myArray[i][1] != 0){
  myArray[i][2] = myArray[i][1];
  myArray[i][1] = myArray[i][0];
  myArray[i][0] = 0;
} else if (myArray[i][3] != 0 && myArray[i][2] != 0 && myArray[i][1] == 0){
  myArray[i][1] = myArray[i][0];
  myArray[i][0] = 0;
} else if (myArray[i][3] == 0 && myArray[i][2] != 0 && myArray[i][1] == 0){
  myArray[i][3] = myArray[i][2];
  myArray[i][2] = myArray[i][0];
  myArray[i][1] = 0;
  myArray[i][0] = 0;
} else if (myArray[i][3] != 0 && myArray[i][2] == 0 && myArray[i][1] == 0 && myArray[i][0] != 0){
  myArray[i][3] = myArray[i][3];
  myArray[i][2] = myArray[i][0];
  myArray[i][1] = 0;
  myArray[i][0] = 0;
};
//первая строчка вправо ходы
if (myArray[i][3] != myArray[i][2] && myArray[i][2] == myArray[i][1]){
  myArray[i][2] = myArray[i][2] + myArray[i][1];////
  myArray[i][1] = myArray[i][0];
  myArray[i][0] = 0;
  score1 = score1 + myArray[i][2];
} else if (myArray[i][3] == myArray[i][2] && myArray[i][1] != myArray[i][0]){
  myArray[i][3] = myArray[i][3] + myArray[i][2];
  myArray[i][2] = myArray[i][1];
  myArray[i][1] = myArray[i][0];
  myArray[i][0] = 0;
  score2 = score2 + myArray[i][3];
} else if (myArray[i][3] != myArray[i][2] && myArray[i][1] == myArray[i][0]){
  myArray[i][1] = myArray[i][1] + myArray[i][0];
  myArray[i][0] = 0;
  score3 = score3 + myArray[i][1];
} else if (myArray[i][0] == myArray[i][1] && myArray[i][2] == myArray[i][3]){
  myArray[i][3] = myArray[i][3] + myArray[i][2];
  myArray[i][2] = myArray[i][1] + myArray[i][0];
  myArray[i][1] = 0;
  myArray[i][0] = 0;
  score4 = score4 + myArray[i][3] + myArray[i][2];
};
};

score = score1 + score2 + score3 + score4;

gameOver();
randomGame();
colorNumber();
contentGame();

};

function moveTop(){ //вверх

for (let i = 0; i <= 3; i++){

//Вверх нули
if (myArray[0][i] == 0 && myArray[1][i] != 0 && myArray[2][i] != 0) {
  myArray[0][i] = myArray[1][i];
  myArray[1][i] = myArray[2][i];
  myArray[2][i] = myArray[3][i];
  myArray[3][i] = 0; 
} else if (myArray[0][i] == 0 && myArray[1][i] == 0 && myArray[2][i] != 0) {
  myArray[0][i] = myArray[2][i];
  myArray[1][i] = myArray[3][i];
  myArray[2][i] = 0;
  myArray[3][i] = 0;
} else if(myArray[0][i] == 0 && myArray[1][i] == 0 && myArray[2][i] == 0){
  myArray[0][i] = myArray[3][i];
  myArray[1][i] = 0;
  myArray[2][i] = 0;
  myArray[3][i] = 0;
} else if (myArray[0][i] != 0 && myArray[1][i] == 0 && myArray[2][i] != 0){
  myArray[1][i] = myArray[2][i];
  myArray[2][i] = myArray[3][i];
  myArray[3][i] = 0;
} else if (myArray[0][i] != 0 && myArray[1][i] != 0 && myArray[2][i] == 0){
  myArray[2][i] = myArray[3][i];
  myArray[3][i] = 0;
} else if (myArray[0][i] == 0 && myArray[1][i] != 0 && myArray[2][i] == 0){
  myArray[0][i] = myArray[1][i];
  myArray[1][i] = myArray[3][i];
  myArray[2][i] = 0;
  myArray[3][i] = 0;
} else if (myArray[0][i] != 0 && myArray[1][i] == 0 && myArray[2][i] == 0 && myArray[3][i] != 0){
  myArray[0][i] = myArray[0][i];
  myArray[1][i] = myArray[3][i];
  myArray[2][i] = 0;
  myArray[3][i] = 0;
};
//первая строчка Вверх ходы
if (myArray[0][i] != myArray[1][i] && myArray[1][i] == myArray[2][i]){
  myArray[1][i] = myArray[1][i] + myArray[2][i];
  myArray[2][i] = myArray[3][i];
  myArray[3][i] = 0;
  score1 = score1 + myArray[1][i];
} else if (myArray[0][i] == myArray[1][i] && myArray[2][i] != myArray[3][i]){
  myArray[0][i] = myArray[0][i] + myArray[1][i];
  myArray[1][i] = myArray[2][i];
  myArray[2][i] = myArray[3][i];
  myArray[3][i] = 0;
  score2 = score2 + myArray[0][i];
} else if (myArray[0][i] != myArray[1][i] && myArray[2][i] == myArray[3][i]){
  myArray[2][i] = myArray[2][i] + myArray[3][i];
  myArray[3][i] = 0;
  score3 = score3 + myArray[2][i];
} else if (myArray[0][i] == myArray[1][i] && myArray[2][i] == myArray[3][i]){
  myArray[0][i] = myArray[0][i] + myArray[1][i];
  myArray[1][i] = myArray[2][i] + myArray[3][i];
  myArray[2][i] = 0;
  myArray[3][i] = 0;
  score4 = score4 + myArray[0][i] + myArray[1][i];
};
};

score = score1 + score2 + score3 + score4;

gameOver();
randomGame();
colorNumber();
contentGame();


};

function moveDown(){ // вниз

for (let i = 0; i <= 3; i++){

//нули Вправо
if (myArray[3][i] == 0 && myArray[2][i] != 0 && myArray[1][i] != 0) {
  myArray[3][i] = myArray[2][i];
  myArray[2][i] = myArray[1][i];
  myArray[1][i] = myArray[0][i];
  myArray[0][i] = 0; 
} else if (myArray[3][i] == 0 && myArray[2][i] == 0 && myArray[1][i] != 0) {
  myArray[3][i] = myArray[1][i];
  myArray[2][i] = myArray[0][i];
  myArray[1][i] = 0;
  myArray[0][i] = 0;
} else if(myArray[3][i] == 0 && myArray[2][i] == 0 && myArray[1][i] == 0){
  myArray[3][i] = myArray[0][i];
  myArray[2][i] = 0;
  myArray[1][i] = 0;
  myArray[0][i] = 0;
} else if (myArray[3][i] != 0 && myArray[2][i] == 0 && myArray[1][i] != 0){
  myArray[2][i] = myArray[1][i];
  myArray[1][i] = myArray[0][i];
  myArray[0][i] = 0;
} else if (myArray[3][i] != 0 && myArray[2][i] != 0 && myArray[1][i] == 0){
  myArray[1][i] = myArray[0][i];
  myArray[0][i] = 0;
} else if (myArray[3][i] == 0 && myArray[2][i] != 0 && myArray[1][i] == 0){
  myArray[3][i] = myArray[2][i];
  myArray[2][i] = myArray[0][i];
  myArray[1][i] = 0;
  myArray[0][i] = 0;
} else if (myArray[3][i] != 0 && myArray[2][i] == 0 && myArray[1][i] == 0 && myArray[0][i] != 0){
  myArray[3][i] = myArray[3][i];
  myArray[2][i] = myArray[0][i];
  myArray[1][i] = 0;
  myArray[0][i] = 0;
};
//первая строчка вправо ходы
if (myArray[3][i] != myArray[2][i] && myArray[2][i] == myArray[1][i]){
  myArray[2][i] = myArray[2][i] + myArray[1][i];////
  myArray[1][i] = myArray[0][i];
  myArray[0][i] = 0;
  score1 = score1 + myArray[2][i];
} else if (myArray[3][i] == myArray[2][i] && myArray[1][i] != myArray[0][i]){
  myArray[3][i] = myArray[3][i] + myArray[2][i];
  myArray[2][i] = myArray[1][i];
  myArray[1][i] = myArray[0][i];
  myArray[0][i] = 0;
  score2 = score2 + myArray[3][i];
} else if (myArray[3][i] != myArray[2][i] && myArray[1][i] == myArray[0][i]){
  myArray[1][i] = myArray[1][i] + myArray[0][i];
  myArray[0][i] = 0;
  score3 = score3 + myArray[1][i];
} else if (myArray[0][i] == myArray[1][i] && myArray[2][i] == myArray[3][i]){
  myArray[3][i] = myArray[3][i] + myArray[2][i];
  myArray[2][i] = myArray[1][i] + myArray[0][i];
  myArray[1][i] = 0;
  myArray[0][i] = 0;
  score4 = score4 + myArray[3][i] + myArray[2][i];
};
};

score = score1 + score2 + score3 + score4;

gameOver();
randomGame();
colorNumber();
contentGame();

};

function contentGame(){

    id00.innerHTML = myArray[0][0];
    if (id00.innerHTML == 0 ) {document.getElementById('id00').style.fontSize = '0px';};
    if (id00.innerHTML != 0 ) {document.getElementById('id00').style.fontSize = '85px';};
    id01.innerHTML = myArray[0][1];
    if (id01.innerHTML == 0 ) {document.getElementById('id01').style.fontSize = '0px';};
    if (id01.innerHTML != 0 ) {document.getElementById('id01').style.fontSize = '85px';};
    id02.innerHTML = myArray[0][2];
    if (id02.innerHTML == 0 ) {document.getElementById('id02').style.fontSize = '0px';};
    if (id02.innerHTML != 0 ) {document.getElementById('id02').style.fontSize = '85px';};
    id03.innerHTML = myArray[0][3];
    if (id03.innerHTML == 0 ) {document.getElementById('id03').style.fontSize = '0px';};
    if (id03.innerHTML != 0 ) {document.getElementById('id03').style.fontSize = '85px';};

    id10.innerHTML = myArray[1][0];
    if (id10.innerHTML == 0 ) {document.getElementById('id10').style.fontSize = '0px';};
    if (id10.innerHTML != 0 ) {document.getElementById('id10').style.fontSize = '85px';};
    id11.innerHTML = myArray[1][1];
    if (id11.innerHTML == 0 ) {document.getElementById('id11').style.fontSize = '0px';};
    if (id11.innerHTML != 0 ) {document.getElementById('id11').style.fontSize = '85px';};
    id12.innerHTML = myArray[1][2];
    if (id12.innerHTML == 0 ) {document.getElementById('id12').style.fontSize = '0px';};
    if (id12.innerHTML != 0 ) {document.getElementById('id12').style.fontSize = '85px';};
    id13.innerHTML = myArray[1][3];
    if (id13.innerHTML == 0 ) {document.getElementById('id13').style.fontSize = '0px';};
    if (id13.innerHTML != 0 ) {document.getElementById('id13').style.fontSize = '85px';};

    id20.innerHTML = myArray[2][0];
    if (id20.innerHTML == 0 ) {document.getElementById('id20').style.fontSize = '0px';};
    if (id20.innerHTML != 0 ) {document.getElementById('id20').style.fontSize = '85px';};
    id21.innerHTML = myArray[2][1];
    if (id21.innerHTML == 0 ) {document.getElementById('id21').style.fontSize = '0px';};
    if (id21.innerHTML != 0 ) {document.getElementById('id21').style.fontSize = '85px';};
    id22.innerHTML = myArray[2][2];
    if (id22.innerHTML == 0 ) {document.getElementById('id22').style.fontSize = '0px';};
    if (id22.innerHTML != 0 ) {document.getElementById('id22').style.fontSize = '85px';};
    id23.innerHTML = myArray[2][3];
    if (id23.innerHTML == 0 ) {document.getElementById('id23').style.fontSize = '0px';};
    if (id23.innerHTML != 0 ) {document.getElementById('id23').style.fontSize = '85px';};

    id30.innerHTML = myArray[3][0];
    if (id30.innerHTML == 0 ) {document.getElementById('id30').style.fontSize = '0px';};
    if (id30.innerHTML != 0 ) {document.getElementById('id30').style.fontSize = '85px';};
    id31.innerHTML = myArray[3][1];
    if (id31.innerHTML == 0 ) {document.getElementById('id31').style.fontSize = '0px';};
    if (id31.innerHTML != 0 ) {document.getElementById('id31').style.fontSize = '85px';};
    id32.innerHTML = myArray[3][2];
    if (id32.innerHTML == 0 ) {document.getElementById('id32').style.fontSize = '0px';};
    if (id32.innerHTML != 0 ) {document.getElementById('id32').style.fontSize = '85px';};
    id33.innerHTML = myArray[3][3];
    if (id33.innerHTML == 0 ) {document.getElementById('id33').style.fontSize = '0px';};
    if (id33.innerHTML != 0 ) {document.getElementById('id33').style.fontSize = '85px';};

};

function randomGame() { // случайное число


for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 3; j++){
    if (myArray[i][j] == 0){
      allNumber = true;
      break;
    } else {
      allNumber = false;

    }
  }
}

if (allNumber) {
  for (let i = 0; i <= 1; i++){
    let horizontal = Math.round(Math.random()*3);
    let vertical = Math.round(Math.random()*3);
    let x = Math.round(Math.random()*10);

    if (myArray[horizontal][vertical] != 0) {
      i = 0;
    } else {
      if (x < 8) {myArray[horizontal][vertical] = 2} else if (x >= 8){myArray[horizontal][vertical] = 4};
      break;
    };
  };
};

};

function colorNumber(){
  for (let i = 0; i <= 3; i++){
    for (let j = 0; j <= 3; j++){
      if (myArray[i][j] == 0){document.getElementById('id'+i+j).style.background = '#9b9f9c';};
      if (myArray[i][j] == 2){document.getElementById('id'+i+j).style.background = '#880707';};
      if (myArray[i][j] == 4){document.getElementById('id'+i+j).style.background = '#880753';};
      if (myArray[i][j] == 8){document.getElementById('id'+i+j).style.background = '#885007';};
      if (myArray[i][j] == 16){document.getElementById('id'+i+j).style.background = '#650788';};
      if (myArray[i][j] == 32){document.getElementById('id'+i+j).style.background = '#886e07';};
      if (myArray[i][j] == 64){document.getElementById('id'+i+j).style.background = '#2e0788';};
      if (myArray[i][j] == 128){document.getElementById('id'+i+j).style.background = '#4d8807';};
      if (myArray[i][j] == 256){document.getElementById('id'+i+j).style.background = '#07887a';};
      if (myArray[i][j] == 512){document.getElementById('id'+i+j).style.background = '#697e76';};
      if (myArray[i][j] == 1024){document.getElementById('id'+i+j).style.background = '#00ff00';};
      if (myArray[i][j] == 2048){document.getElementById('id'+i+j).style.background = '#ff7e00';};
      if (myArray[i][j] == 4096){document.getElementById('id'+i+j).style.background = '#ff2a00';};
      if (myArray[i][j] == 8192){document.getElementById('id'+i+j).style.background = '#00f0ff';};
      if (myArray[i][j] == 16384){
        document.getElementById('id'+i+j).style.background = '#ffffff';
        document.getElementById('id'+i+j).style.fontSize = '15px';
      };
    };
  };
};

function gameOver(){

  if (score > recordScore) {
    recordScore = score;
    document.getElementById('recordScore').innerHTML = recordScore;
  };
  document.getElementById('score').innerHTML = score;
};


function newGame() {
score = 0;
score1 = 0;
score2 = 0;
score3 = 0;
score4 = 0;

  myArray = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

  for (let i = 0; i <= 1; i++){
    let horizontal = Math.round(Math.random()*3);
    let vertical = Math.round(Math.random()*3);
    let x = Math.round(Math.random()*10);

      if (x < 8) {myArray[horizontal][vertical] = 2} else if (x >= 8){myArray[horizontal][vertical] = 4};

    };

  colorNumber();
  contentGame();
  document.getElementById('recordScore').innerHTML = recordScore;
  document.getElementById('score').innerHTML = score;

}

/*

table.addEventListener('touchstart', function(e){TouchStart(e);});
table.addEventListener('touchmove', function(e){TouchMove(e);});
table.addEventListener('touchend', function(e){TouchEnd(e);});


function TouchStart(e){
  e.preventDefault();
  shiftX = e.changedTouches[0].clientX;
  shiftY = e.changedTouches[0].clientY;
};

function TouchMove(e){
  newLeft = e.changedTouches[0].clientX;
  newTop = e.changedTouches[0].clientY;

  if (shiftX == newLeft && shiftY > newTop) {
    shiftX = null; shiftY = null; newLeft = null; newTop = null;
    moveTop();
  } else if (shiftX == newLeft && shiftY < newTop){
    shiftX = null; shiftY = null; newLeft = null; newTop = null;
    moveDown();
  } else if (shiftY == newTop && shiftX > newLeft){
    shiftX = null; shiftY = null; newLeft = null; newTop = null;
    moveLeft();
  } else if (shiftY == newTop && shiftX < newLeft){
    shiftX = null; shiftY = null; newLeft = null; newTop = null;
    moveRight();
  }
};

function TouchEnd(e){
  shiftX = null;
  shiftY = null;
  newLeft = null;
  newTop = null;

  table.removeEventListener('touchstart', function(e){TouchStart(e);});
  table.removeEventListener('touchmove', function(e){TouchStart(e);});
  table.removeEventListener('touchend', function(e){TouchStart(e);});

   table.ondragstart = function(){
      return false;
    }

};

*/