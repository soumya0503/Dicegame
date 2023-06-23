var randomnanumber1=Math.floor(Math.random()*6+1);
var randomImageSource1= "dice"+randomnanumber1+".png";
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1 );

var randomnanumber2=Math.floor(Math.random()*6+1);
var randomImageSource2= "dice"+randomnanumber2+".png";
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2 );

if(randomnanumber1>randomnanumber2){
    document.querySelector("h1").textContent="Player 1 Wins";
}
else if(randomnanumber1<randomnanumber2){
    document.querySelector("h1").textContent="Player 2 Wins";
}
else{
    document.querySelector("h1").textContent="Draw";
}