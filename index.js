var j = document.querySelectorAll(".drum").length;

for (var i = 0; i < j; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttomInnerHtml = this.innerHTML;
     keyPress(buttomInnerHtml);
     buttonAnimation(buttomInnerHtml);

  });
}
 document.addEventListener("keydown",function(event){  // Here we are only writing document but not the query querySelectorbecause so that entire document gets selected
  keyPress(event.key);
  buttonAnimation(event.key);
});

function keyPress(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default: console.log(buttomInnerHtml);

  }


}
function buttonAnimation(currentkey){
  var activeButton=document.querySelector("." +currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){ activeButton.classList.remove("pressed");},100);

}





// var audio=new Audio("sounds/tom-1.mp3");
//      audio.play();});
// }
