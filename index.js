var input=prompt("Enter heads or tales.👉Note that all letters must be small case👈");

var randomNumber1= (Math.floor(Math.random()*2));

var randomImageSource = "images/image" + randomNumber1+".png";

var image1 = document.querySelector("img");

image1.setAttribute("src", randomImageSource);

function value(){
if (randomNumber1%2===0){
  document.querySelector("h1").innerHTML ="Tales" ;
  return "tales";
}
else{
  document.querySelector("h1").innerHTML ="Heads" ;
  return "heads";
}
}

var output=value()

if(input===output){
document.querySelector("h3").innerHTML ="👏YOU WON THE TOSS👏";
}
else{
  document.querySelector("h3").innerHTML ="YOU LOST";
}
