// for left side dice 
var randomeNumber1 = Math.floor(Math.random() * 6) + 1;
// select randome img from dice1 to dice 6
var randomediceImg = "dice" + randomeNumber1 + ".png"; 
//  images/dice1.pnj to images/dice6.pnj
var randomeImgSrc = "images/" + randomediceImg; 
document.querySelectorAll("img")[0].setAttribute("src", randomeImgSrc);

// for right side dice
var randomeNumber2 = Math.floor(Math.random() * 6)+ 1;
var randomeImgSrc2 = "images/dice" + randomeNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomeImgSrc2);

if(randomeNumber1 > randomeNumber2){
    document.querySelector('h1').innerHTML = ' Player 1 Win '
}else if(randomeNumber1 < randomeNumber2){
    document.querySelector('h1').innerHTML = ' Playe 2 Wins '
}else{
    document.querySelector('h1').innerHTML = "Draw "
}