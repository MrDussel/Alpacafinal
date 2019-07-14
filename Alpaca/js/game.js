
window.onbeforeunload = function() {
    return 'You have unsaved changes!';
}

var count = 1;

var names = [];
var n1 = 0;
var n2 = 0;
var n3 = 0;
var n4 = 0;

function savename() {
  var playername1 = names[0];
  var playername2 = names[1];
  var playername3 = names[2];
  var playername4 = names[3];
  names[0] = document.getElementById("InputP1").value;
  names[1] = document.getElementById("InputP2").value;
  names[2] = document.getElementById("InputP3").value;
  names[3] = document.getElementById("InputP4").value;
  document.getElementById("HSpielername1").innerHTML = names[0];
  document.getElementById("HSpielername2").innerHTML = names[1];
  document.getElementById("HSpielername3").innerHTML = names[2];
  document.getElementById("HSpielername4").innerHTML = names[3];
  return names
};
var playername1 = names[0];
var playername2 = names[1];
var playername3 = names[2];
var playername4 = names[3];


function zaehlen() {
  count = count + 1;

  if (count > playercount) {
    count = 1;
  }
}

function moveStart() {
  fullpage_api.moveTo(2, 0);
}

function moveP1Next() {
  fullpage_api.moveTo(2, 1);
}

function moveP2Next() {
  fullpage_api.moveTo(3, 1);
}

function moveP3Next() {
  fullpage_api.moveTo(4, 1);
}

function moveP4Next() {
  fullpage_api.moveTo(5, 1);
}

function movetoone() {
  $('#playertransition').addClass('transition');
  setInterval(function(){$('playertransition').removeClass('transition');},4000);
  document.getElementById("Playernamefortransition").innerHTML = names[0] + "ist dran";
  fullpage_api.moveTo(2, 0);
}

function movetotwo() {
  $('#playertransition').addClass('transition');
  setInterval(function(){$('#playertransition').removeClass('transition');},4000);
  document.getElementById("Playernamefortransition").innerHTML = names[1] + "ist dran";
  fullpage_api.moveTo(3, 0);
}

function movetothree() {

  if (playercount > 2) {
    fullpage_api.moveTo(4, 0);
    $('#playertransition').addClass('transition');
    setInterval(function(){$('#playertransition').removeClass('transition');},4000);
    document.getElementById("Playernamefortransition").innerHTML = names[2] + "ist dran";

  } else {
    fullpage_api.moveTo(2, 0);
    $('#playertransition').addClass('transition');
    setInterval(function(){$('#playertransition').removeClass('transition');},4000);
    document.getElementById("Playernamefortransition").innerHTML = names[3] + "ist dran";

  }
}


function movetofour() {
  if (playercount > 3) {
    fullpage_api.moveTo(5, 0);
    $('#playertransition').addClass('transition');
    setInterval(function(){$('#playertransition').removeClass('transition');},4000);
    document.getElementById("Playernamefortransition").innerHTML = playername4 + "ist dran";


  } else {
    fullpage_api.moveTo(2, 0);
    $('#playertransition').addClass('transition');
    setInterval(function(){$('#playertransition').removeClass('transition');},4000);
    document.getElementById("Playernamefortransition").innerHTML = playername1 + "ist dran";


  }
}



//EVENTS



//animation




//Daten zum abgleich was getragen wird. Für function checkwearing
// for (player1wearing[0]===true) { display all headwewar } etc....
var player1wearing = [ /*"Kopfbedeckung"*/ false, /*"Hand1"*/ false, /*"Hand2"*/ false, /*"Körper"*/ false, /*"Füße"*/ false];
var player2wearing = [ /*"Kopfbedeckung"*/ false, /*"Hand1"*/ false, /*"Hand2"*/ false, /*"Körper"*/ false, /*"Füße"*/ false];
var player3wearing = [ /*"Kopfbedeckung"*/ false, /*"Hand1"*/ false, /*"Hand2"*/ false, /*"Körper"*/ false, /*"Füße"*/ false];
var player4wearing = [ /*"Kopfbedeckung"*/ false, /*"Hand1"*/ false, /*"Hand2"*/ false, /*"Körper"*/ false, /*"Füße"*/ false];

var playeritems1 = []
var playeritems2 = []
var playeritems3 = []
var playeritems4 = [] //






function nextplayer() {
  count = count + 1;

  if (count > playercount) {
    count = 1;
  }
  h1();


  console.log(count);

  if (count == 1) {
    $("#player1board").show();
    $("#player2board").hide()
    $("#player3board").hide()
    $("#player4board").hide()

  } else if (count == 2) {
    $("#player1board").hide();
    $("#player2board").show()
    $("#player3board").hide()
    $("#player4board").hide()

  } else if (count == 3) {
    $("#player1board").hide();
    $("#player2board").hide()
    $("#player3board").show()
    $("#player4board").hide()

  } else if (count == 4) {
    $("#player1board").hide();
    $("#player2board").hide()
    $("#player3board").hide()
    $("#player4board").show()

  }

};

//playersetup
var player1 = [playername1, n1, true, playersiegpunkte1]; // [name, Litness, active(y/n)]
var player2 = [playername2, n2, true, playersiegpunkte2];
var player3 = [playername3, n3, false, playersiegpunkte3];
var player4 = [playername4, n4, false, playersiegpunkte4];


var playersiegpunkte1 = 0; //bei 5 siegpunkten ist man alpacalaca -> open new
var playersiegpunkte2 = 0;
var playersiegpunkte3 = 0;
var playersiegpunkte4 = 0;

var allplayers = [player1[0], player2[0]];

function addplayer() {

}



//itemlist
var item1 = ["Airhorn", 2, 1]; // Name, litnessbonus, availability
var item2 = ["Arctic Goldfish", 3, 1];
var item3 = ["Banana Sword", 4, 2];
var item4 = ["Burning Marshmallow", 9, 1];
var item5 = ["Circle Game", 5, 1];
var item6 = ["Cucumber Facemask", 3, 1];
var item7 = ["Ghettoblaser", 7, 1];
var item8 = ["Giant Q-Tip", 3, 1];
var item9 = ["Holy Plunger", 5, 2];
var item10 = ["Hoverboard", 6, 1];
var item11 = ["Propellerhead", 6, 2];
var item12 = ["Socks in Sandals", 1, 2];
var item13 = ["Spicy Ramen", 1, 2];
var item14 = ["Spoiled Milk", 4, 2];
var item15 = ["Whoope Cushion", 2, 1];


if (item3[2] <= 0) {
  //MACH DEN BUTTON GRAU
}



//var playerturn = ["", 0, true ] //variablen die genutzt werden sollen

var i1 = document.getElementsByClassName('item1');
var i2 = document.getElementsByClassName('item2');
var i3 = document.getElementsByClassName('item3');
var i4 = document.getElementsByClassName('item4');
var i5 = document.getElementsByClassName('item5');
var i6 = document.getElementsByClassName('item6');
var i7 = document.getElementsByClassName('item7');
var i8 = document.getElementsByClassName('item8');
var i9 = document.getElementsByClassName('item9');
var i10 = document.getElementsByClassName('item10');
var i11 = document.getElementsByClassName('item11');
var i12 = document.getElementsByClassName('item12');
var i13 = document.getElementsByClassName('item13');
var i14 = document.getElementsByClassName('item14');
var i15 = document.getElementsByClassName('item15');






console.log('n'+window.count);

function additem1() {

  window['playeritems' + count].push(item1);
  console.log(window['playeritems' + count]);
  document.getElementById('airhorn' + count).removeAttribute("style");
  window['n'+count] = window['n'+count] + item1[1];
  update1();
  airhorn.play();
  $('.item1').css("background-image", "url(./css/img/accessory/Airhorn1.jpg)");
  for(var i = 0; i < i1.length; i++) {
     i1[i].removeAttribute("onclick");
  }
  console.log(window['n' + count]);
  return window['playeritems' + count];
}



function additem2() {

  window['playeritems' + count].push(item2);
  console.log(window['playeritems' + count]);
  document.getElementById('arcticGoldfisch' + count).removeAttribute("style");
  window['n' + count] = window['n' + count] + item2[1];
  update1();
  arcticGoldfisch.play();
  $('.item2').css("background-image", "url(./css/img/accessory/ArcticGoldfish1.jpg)");
  for(var i = 0; i < i2.length; i++) {
     i2[i].removeAttribute("onclick");
  }

  console.log();
  return window['n' + count];
}



function additem3() {

  window['playeritems' + count].push(item3);
  console.log(window['playeritems' + count]);
  document.getElementById('bananaSword' + count).removeAttribute("style");
  window['n' + count] = window['n' + count] + item3[1];
  update1();
  bananaSword.play();
  item3[2] = item3[2] - 1;
  if (item3[2] <= 0) {
    $('.item3').css("background-image", "url(./css/img/accessory/Bananasword1.jpg)");
    for(var i = 0; i < i3.length; i++) {
       i3[i].removeAttribute("onclick");
    }

  }

  return window['n' + count];
}



function additem4() {

  window['playeritems' + count].push(item4);
  console.log(window['playeritems' + count]);
  document.getElementById('burningMashmallow' + count).removeAttribute("style");
  window['n' + count] = window['n' + count] + item4[1];
  update1();
  burningMashmallow.play();
  $('.item4').css("background-image", "url(./css/img/accessory/BurningMarshmallow1.jpg)");
  for(var i = 0; i < i4.length; i++) {
     i4[i].removeAttribute("onclick");
  }

  return window['n' + count];
}


function additem5() {

  window['playeritems' + count].push(item5);
  console.log(window['playeritems' + count]);
  document.getElementById('circleGame' + count).removeAttribute("style");
  window['n' + count] = window['n' + count] + item5[1];
  update1();
  circleGame.play();
  $('.item5').css("background-image", "url(./css/img/accessory/CircleGame1.jpg)");
  for(var i = 0; i < i5.length; i++) {
     i5[i].removeAttribute("onclick");
  }

  return window['n' + count];
}



function additem6() {

  window['playeritems' + count].push(item6);
  console.log(window['playeritems' + count]);
  document.getElementById('cucumberfacemask' + count).removeAttribute("style");
  window['n' + count] = window['n' + count] + item6[1];
  update1();
  cucumberfacemask.play();
  $('.item6').css("background-image", "url(./css/img/accessory/CucumberFacemask1.jpg)");
  for(var i = 0; i < i6.length; i++) {
     i6[i].removeAttribute("onclick");
  }

  return window['n' + count];
}


function additem7() {

  window['playeritems' + count].push(item7);
  console.log(window['playeritems' + count]);
  document.getElementById('ghettoblaster' + count).removeAttribute("style");  window['n' + count] = window['n' + count] + item7[1];
  update1();
  ghettoblaster.play();
  $('.item7').css("background-image", "url(./css/img/accessory/Ghettoblaster1.jpg)");
  for(var i = 0; i < i7.length; i++) {
     i7[i].removeAttribute("onclick");
  }

  return window['n' + count];
}


function additem8() {

  window['playeritems' + count].push(item8);
  console.log(window['playeritems' + count]);
  document.getElementById('giantQtip' + count).removeAttribute("style");
  window['n' + count] = window['n' + count] + item8[1];
  update1();
  giantQtip.play();
  $('.item8').css("background-image", "url(./css/img/accessory/GiantQ-Tip1.jpg)");
  for(var i = 0; i < i8.length; i++) {
     i8[i].removeAttribute("onclick");
  }

  return window['n' + count];
}


function additem9() {

  window['playeritems' + count].push(item9);
  console.log(window['playeritems' + count]);
  document.getElementById('holyPlunger' + count).removeAttribute("style");
  window['n' + count] = window['n' + count] + item9[1];
  update1();
  holyPlunger.play();
  item9[2] = item9[2] - 1;
  if (item9[2] <= 0) {
    $('.item9').css("background-image", "url(./css/img/accessory/HolyPlunger1.jpg)");
    for(var i = 0; i < i9.length; i++) {
       i9[i].removeAttribute("onclick");
    }

  }
  return window['n' + count];
}


function additem10() {

  window['playeritems' + count].push(item10);
  console.log(window['playeritems' + count]);
  document.getElementById('hoverboard' + count).removeAttribute("style");
  window['n' + count] = window['n' + count] + item10[1];
  update1();
  hoverboard.play();
  $('.item10').css("background-image", "url(./css/img/accessory/Hoverboard1.jpg)");
  for(var i = 0; i < i10.length; i++) {
     i10[i].removeAttribute("onclick");
  }

  return window['n' + count];
}


function additem11() {

  window['playeritems' + count].push(item11);
  console.log(window['playeritems' + count]);
  document.getElementById('propellerHat' + count).removeAttribute("style");
  window['n' + count] = window['n' + count] + item11[1];
  update1();
  propellerHat.play();
  item11[2] = item11[2] - 1;
  if (item11[2] <= 0) {
    $('.item11').css("background-image", "url(./css/img/accessory/PropellerHat1.jpg)");
    for(var i = 0; i < i11.length; i++) {
       i11[i].removeAttribute("onclick");
    }

  }
  return window['n' + count];
}


function additem12() {

  window['playeritems' + count].push(item12);
  console.log(window['playeritems' + count]);
  document.getElementById('socksInSandals' + count).removeAttribute("style");
  window['n' + count] = window['n' + count] + item12[1];
  update1();
  socksInSandals.play();
  item12[2] = item12[2] - 1;
  if (item12[2] <= 0) {
    $('.item12').css("background-image", "url(./css/img/accessory/SocksInSandals1.jpg)");
    for(var i = 0; i < i12.length; i++) {
       i12[i].removeAttribute("onclick");
    }

  }
  return window['n' + count];
}


function additem13() {

  window['playeritems' + count].push(item13);
  console.log(window['playeritems' + count]);
  document.getElementById('spicyRamen' + count).removeAttribute("style");
  window['n' + count] = window['n' + count] + item13[1];
  update1();
  spicyRamen.play();
  item13[2] = item13[2] - 1;
  if (item13[2] <= 0) {
    $('.item13').css("background-image", "url(./css/img/accessory/SpicyRamen1.jpg)");
    for(var i = 0; i < i13.length; i++) {
       i13[i].removeAttribute("onclick");
    }

  }
  return window['n' + count];
}


function additem14() {

  window['playeritems' + count].push(item14);
  console.log(window['playeritems' + count]);
  document.getElementById('spoiledMilk' + count).removeAttribute("style");
  window['n' + count] = window['n' + count] + item14[1];
  update1();
  spoiledMilk.play();
  item14[2] = item14[2] - 1;
  if (item14[2] <= 0) {
    $('.item14').css("background-image", "url(./css/img/accessory/SpoiledMilk1.jpg)");
    for(var i = 0; i < i14.length; i++) {
       i14[i].removeAttribute("onclick");
    }

  }
  return window['n' + count];
}


function additem15() {

  window['playeritems' + count].push(item15);
  console.log(window['playeritems' + count]);
  document.getElementById('whoopeeCushion' + count).removeAttribute("style");
  window['n' + count] = window['n' + count] + item15[1];
  update1();
  whoopeeCushion.play();
  $('.item15').css("background-image", "url(./css/img/accessory/WhoopeeCushion1.jpg)");
  for(var i = 0; i < i15.length; i++) {
     i15[i].removeAttribute("onclick");
  }

  return window['n' + count];
}


function update1() {
  document.getElementById('LitnessWert' + count).innerHTML = window['n' + count];
  woosh.play();
}

var woosh = new Audio('./sounds/woosh.wav');
var vic = new Audio('./sounds/victory.mp3');

var airhorn = new Audio('./sounds/airhorn.mp3');
var arcticGoldfisch = new Audio('./sounds/arcticGoldfisch.mp3');
var bananaSword = new Audio('./sounds/bananaSword.mp3');
var burningMashmallow = new Audio('./sounds/burningMashmallow.mp3');
var circleGame = new Audio('./sounds/circleGame.mp3');
var cucumberfacemask = new Audio('./sounds/cucumberfacemask.mp3');
var ghettoblaster = new Audio('./sounds/ghettoblaster.mp3');
var giantQtip = new Audio('./sounds/giantQtip.mp3');
var holyPlunger = new Audio('./sounds/holyPlunger.mp3');
var hoverboard = new Audio('./sounds/hoverboard.mp3');
var propellerHat = new Audio('./sounds/propellerHat.mp3');
var socksInSandals = new Audio('./sounds/socksInSandals.mp3');
var spicyRamen = new Audio('./sounds/spicyRamen.mp3');
var spoiledMilk = new Audio('./sounds/spoiledMilk.mp3');
var whoopeeCushion = new Audio('./sounds/whoopeeCushion.mp3');


function mute(){
enemyaudio.muted = true;
airhorn.muted = true;
arcticGoldfisch.muted = true;
bananaSword.muted = true;
circleGame.muted = true;
cucumberfacemask.muted = true;
ghettoblaster.muted = true;
giantQtip.muted = true;
holyPlunger.muted = true;
hoverboard.muted = true;
propellerHat.muted = true;
socksInSandals.muted = true;
spicyRamen.muted = true;
spoiledMilk.muted = true;
whoopeeCushion.muted = true;
woosh.muted = true;
vic.muted = true;
};
function unmute(){
enemyaudio.muted = false;
woosh.muted = false;
vic.muted = false;
enemyaudio.muted = false;
airhorn.muted = false;
arcticGoldfisch.muted = false;
bananaSword.muted = false;
circleGame.muted = false;
cucumberfacemask.muted = false;
ghettoblaster.muted = false;
giantQtip.muted = false;
holyPlunger.muted = false;
hoverboard.muted = false;
propellerHat.muted = false;
socksInSandals.muted = false;
spicyRamen.muted = false;
spoiledMilk.muted = false;
whoopeeCushion.muted = false;
};


function h1() {
  $("#Happening1").toggle();
}

function h2() {
  $("#Happening2").toggle();
}
var src = '';

var alpaca1 = ["Alpaca on Fire", 31, 5, -6, "./img/alpaca/AlpakaOnFire.png"];
var alpaca2 = ["Babypaca", 25, 4, -2, "./img/alpaca/Babypaka.png"];
var alpaca3 = ["Candypaca", 21, 3, -3, "./img/alpaca/Candypaka.png"];
var alpaca4 = ["Cool Norbert", 29, 4, -4, "./img/alpaca/CoolNorbert.png"];
var alpaca5 = ["Giesela", 17, 3, -2, "./img/alpaca/Gisela.png"];
var alpaca6 = ["Hacker", 10, 2, -1, "./img/alpaca/Hyperbeast.png"];
var alpaca7 = ["Hypebeast", 27, 4, -3, "./img/alpaca/NakedTruth.png"];
var alpaca8 = ["Naked Truth", 5, 2, -1, "./img/alpaca/Nerdpaka.png"];
var alpaca9 = ["Sir Al Paca", 17, 3, -4, "./img/alpaca/SirAlPaka.png"];
var alpaca10 = ["Trashpaca", 3, 1, -1, "./img/alpaca/Trashpaka.png"];


var alpacacrew = [
  alpaca1,
  alpaca2,
  alpaca3,
  alpaca4,
  alpaca5,
  alpaca6,
  alpaca7,
  alpaca8,
  alpaca9,
  alpaca10,
];



var enemy = '';
var enemyaudio = new Audio('./sounds/fight.mp3');

function alpacadiv(){
$(".alpacakommt").fadeIn(3000);
}

function checkwin(){
  console.log(window['playersiegpunkte' + count]);
  if (window['playersiegpunkte' + count] > 4){
    console.log("YOU WON");
    document.getElementById("Gameover").classList.add("show");
    document.getElementById("GameoverPlayer").innerHTML = window['playersiegpunkte' + count];
  }
}


function playerwin1(){
  console.log("WIN");
  document.getElementById("WIN").classList.add("show");

  window['playersiegpunkte' + count] = window['playersiegpunkte' + count] + 1;
  document.getElementById("siegpunkte" + count).innerHTML = window['playersiegpunkte' + count] ;
  checkwin();
}

function playerloss1(){
  console.log("Loss");
  document.getElementById("Loss").classList.add("show");

}

function weiter(){

  vic.pause();
vic.currentTime = 0;
document.getElementById("Loss").classList.remove("show");
document.getElementById("WIN").classList.remove("show");
$(".alpacakommt").fadeOut(1000);

}

function alpaca() {
  enemyaudio.play();
  var enemy = alpacacrew[Math.floor(Math.random() * alpacacrew.length)];
  document.getElementById('AlpacaName').innerHTML = "A wild " + enemy[0] + " appears!"; //Name Alpaca
  document.getElementById('AlpacaLitness').innerHTML = enemy[1]; //Litpoints Alpaca
  $('#AlpacaBild').attr("src", enemy[4]); //img src

  console.log(enemy[1]);
  console.log(window['n' + count]);

  setTimeout(function(){
  enemyaudio.pause();
  enemyaudio.currentTime = 0;
  var diff = window['n' + count] - enemy[1];
  console.log(diff);
  if (diff > 0) {
    console.log("done");
    vic.play();
    
    playerwin1();
  } else if (diff < 0) {
    console.log("done");
    playerloss1();
  }}, 8000)

};

function alpacompare() {
  console.log(enemy[1]);
  var diff = player1[1] - enemy[1];
  console.log(diff);
  if (diff < 0) {
    console.log("done");

    playerwin1();
  } else if (diff > 0) {
    console.log("done");
    playerloss1();
  }

};



/*
// Nach Spielphase des letzten Spielers sollen die Variablen in "playerturn" ausgetauscht werden.
function changeplayerturn () {


}


function addlittness(){

}

function shopping(playerturn[0,1]){


}
*/


function restartgame(){
  location.reload();
}


var playercount = 2;




function addplayer() {

  if ($('#InputP3').css('display') === 'block') {
    $("#InputP4").css("display", "block");
    playercount = playercount + 1;
    console.log(playercount);
  } else {
    $("#InputP3").css("display", "block");
    playercount = playercount + 1;
    console.log(playercount);
  }
};

function removeplayer() {

  if ($('#InputP4').css('display') === 'none' && $('#InputP3').css('display') === 'block') {
    $("#InputP3").css("display", "none");
    playercount = playercount - 1;
    console.log(playercount);
  }


  if ($('#InputP3').css('display') === 'block') {
    $("#InputP4").css("display", "none");
    playercount = playercount - 1;
    console.log(playercount);

  }

};

/*
function P1additem1(){
  player1items.push(item1);
  console.log(playeritems);
  document.getElementById('Rucksack1').innerHTML += '<br>' + item1[0];
   n1 = n1 + item1[1];
  update1();
  return n1;


}
function P1additem2(){
  player1items.push(item2);
  console.log(playeritems);
  document.getElementById('Rucksack1').innerHTML += '<br>' + item2[0];
   n1 = n1 + item2[1];
  update1();
  return n1;

}
function P1additem3(){
  player1items.push(item3);
  console.log(playeritems);
  document.getElementById('Rucksack1').innerHTML += '<br>' + item3[0];
   n1 = n1 + item3[1];
  update1();
  return n1;

}
function P1additem4(){
  player1items.push(item4);
  console.log(playeritems);
  document.getElementById('Rucksack1').innerHTML += '<br>' + item4[0];
   n1 = n1 + item4[1];
  update1();
  return n1;

}
function P1additem5(){
  player1items.push(item5);
  console.log(playeritems);
  document.getElementById('Rucksack1').innerHTML += '<br>' + item5[0];
   n1 = n1 + item5[1];
  update1();
  return n1;

}
function P1additem6(){
  player1items.push(item6);
  console.log(playeritems);
  document.getElementById('Rucksack1').innerHTML += '<br>' + item6[0];
   n1 = n1 + item6[1];
   update1();
  return n1;

}
function P1additem7(){
  player1items.push(item7);
  console.log(playeritems);
  document.getElementById('Rucksack1').innerHTML += '<br>' + item7[0];
   n1 = n1 + item7[1];
   update1();
  return n1;

}
function P1additem8(){
  player1items.push(item8);
  console.log(playeritems);
  document.getElementById('Rucksack1').innerHTML += '<br>' + item8[0];
   n1 = n1 + item8[1];
  update1();
  return n1;

}
//PLAYER2ITEMS



function P2additem1(){
  player2items.push(item1);
  console.log(playeritems);
  document.getElementById('Rucksack2').innerHTML += '<br>' + item1[0];
   n2 = n2 + item1[1];
  update2();
  return n2;


}
function P2additem2(){
  player2items.push(item2);
  console.log(playeritems);
  document.getElementById('Rucksack2').innerHTML += '<br>' + item2[0];
   n2 = n2 + item2[1];
  update2();
  return n2;

}
function P2additem3(){
  player2items.push(item3);
  console.log(playeritems);
  document.getElementById('Rucksack2').innerHTML += '<br>' + item3[0];
   n2 = n2 + item3[1];
  update2();
  return n2;

}
function P2additem4(){
  player2items.push(item4);
  console.log(playeritems);
  document.getElementById('Rucksack2').innerHTML += '<br>' + item4[0];
   n2 = n2 + item4[1];
  update2();
  return n2;

}
function P2additem5(){
  player2items.push(item5);
  console.log(playeritems);
  document.getElementById('Rucksack2').innerHTML += '<br>' + item5[0];
   n2 = n2 + item5[1];
  update2();
  return n2;

}
function P2additem6(){
  player2items.push(item6);
  console.log(playeritems);
  document.getElementById('Rucksack2').innerHTML += '<br>' + item6[0];
   n2 = n2 + item6[1];
   update2();
  return n2;

}
function P2additem7(){
  player2items.push(item7);
  console.log(playeritems);
  document.getElementById('Rucksack2').innerHTML += '<br>' + item7[0];
   n2 = n2 + item7[1];
   update2();
  return n2;

}
function P2additem8(){
  player2items.push(item8);
  console.log(playeritems);
  document.getElementById('Rucksack2').innerHTML += '<br>' + item8[0];
   n2 = n2 + item8[1];
  update2();
  return n2;

}


//PLAYER3ITEMS


function P3additem1(){
  player3items.push(item1);
  console.log(playeritems);
  document.getElementById('Rucksack3').innerHTML += '<br>' + item1[0];
   n3 = n3 + item1[1];
  update3();
  return n3;


}
function P3additem2(){
  player3items.push(item2);
  console.log(playeritems);
  document.getElementById('Rucksack3').innerHTML += '<br>' + item2[0];
   n3 = n3 + item2[1];
  update3();
  return n3;

}
function P3additem3(){
  player3items.push(item3);
  console.log(playeritems);
  document.getElementById('Rucksack3').innerHTML += '<br>' + item3[0];
   n3 = n3 + item3[1];
  update3();
  return n3;

}
function P3additem4(){
  player3items.push(item4);
  console.log(playeritems);
  document.getElementById('Rucksack3').innerHTML += '<br>' + item4[0];
   n3 = n3 + item4[1];
  update3();
  return n3;

}
function P3additem5(){
  player3items.push(item5);
  console.log(playeritems);
  document.getElementById('Rucksack3').innerHTML += '<br>' + item5[0];
   n3 = n3 + item5[1];
  update3();
  return n3;

}
function P3additem6(){
  player3items.push(item6);
  console.log(playeritems);
  document.getElementById('Rucksack3').innerHTML += '<br>' + item6[0];
   n3 = n3 + item6[1];
   update3();
  return n3;

}
function P3additem7(){
  player3items.push(item7);
  console.log(playeritems);
  document.getElementById('Rucksack3').innerHTML += '<br>' + item7[0];
   n3 = n3 + item7[1];
   update3();
  return n3;

}
function P3additem8(){
  player3items.push(item8);
  console.log(playeritems);
  document.getElementById('Rucksack3').innerHTML += '<br>' + item8[0];
   n3 = n3 + item8[1];
  update3();
  return n3;

}


//PLAYER4ITEMS

function P4additem1(){
  player3items.push(item1);
  console.log(playeritems);
  document.getElementById('Rucksack4').innerHTML += '<br>' + item1[0];
   n4 = n4 + item1[1];
  update4();
  return n4;


}
function P4additem2(){
  player4items.push(item2);
  console.log(playeritems);
  document.getElementById('Rucksack4').innerHTML += '<br>' + item2[0];
   n4 = n4 + item2[1];
  update4();
  return n4;

}
function P4additem3(){
  player4items.push(item3);
  console.log(playeritems);
  document.getElementById('Rucksack4').innerHTML += '<br>' + item3[0];
   n4 = n4 + item3[1];
  update4();
  return n4;

}
function P4additem4(){
  player4items.push(item4);
  console.log(playeritems);
  document.getElementById('Rucksack4').innerHTML += '<br>' + item4[0];
   n4 = n4 + item4[1];
  update4();
  return n4;

}
function P4additem5(){
  player4items.push(item5);
  console.log(playeritems);
  document.getElementById('Rucksack4').innerHTML += '<br>' + item5[0];
   n4 = n4 + item5[1];
  update4();
  return n4;

}
function P4additem6(){
  player4items.push(item6);
  console.log(playeritems);
  document.getElementById('Rucksack4').innerHTML += '<br>' + item6[0];
   n4 = n4 + item6[1];
   update4();
  return n4;

}
function P4additem7(){
  player4items.push(item7);
  console.log(playeritems);
  document.getElementById('Rucksack4').innerHTML += '<br>' + item7[0];
   n4 = n4 + item7[1];
   update4();
  return n4;

}
function P4additem8(){
  player4items.push(item8);
  console.log(playeritems);
  document.getElementById('Rucksack4').innerHTML += '<br>' + item8[0];
   n4 = n4 + item8[1];
  update4();
  return n4;

}
function additem1(){

    window['playeritems'+count].push(item1);
    console.log(window['playeritems'+count]);
    document.getElementById('Rucksack1'+count).innerHTML += '<br>' + item1[0];
     window['n'+count] = window['n'+count] + item1[1];
    update1();
    return window['n'+count];
  }

}
*/



//erstelle neuen Charakter
