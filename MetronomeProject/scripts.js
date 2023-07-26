var slider = document.getElementById("myRange");
var output = document.getElementById("BPM");
var button = document.getElementById("playbutton");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var inputbutton = document.getElementById("inputbutton");
var inputbox = document.getElementById("inputbox");
var left  = document.getElementById("left");
var right  = document.getElementById("right");
let beat = new Audio("tick.mp3");
var playing = false;
var delay = 0;

inputbox.style.opacity = "0";
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  console.log(output.innerHTML)
}

plus.onclick = function(){
  //console.log(parseInt(output.innerHTML));
  if(parseInt(output.innerHTML) < 135){
    output.innerHTML = (parseInt(output.innerHTML) + 1).toString();
    slider.value = output.innerHTML;
  }
  
}

minus.onclick = function(){
  if(parseInt(output.innerHTML) > 50){
    output.innerHTML = (parseInt(output.innerHTML) - 1).toString()
    slider.value = output.innerHTML;
  }
  
}

function playSound(){
  delay = 60000/(parseInt(output.innerHTML))
  delay = delay - (beat.duration * 1000)
  console.log(delay)
  
  if(playing){
    beat.play()
    
    if(left.style.backgroundColor == "rgb(187, 187, 187)"){
      
      left.style.backgroundColor = "blue";
      right.style.backgroundColor = "#bbb";
      
    }
    else{
      right.style.backgroundColor = "blue";
      left.style.backgroundColor = "#bbb";
      
    }
    setTimeout(() => {  playSound() }, delay);

  }
}

function buttonplay(){
  if(inputbox.value != ""){
    output.innerHTML = inputbox.value;
    slider.value = inputbox.value;
  }
  if (inputbox.value > 135 || inputbox.value < 1){
    output.innerHTML = 60;
    slider.value=60;
  }
  inputbox.style.opacity = "0";
  if(playing){
    playing = false;

  }
  else{
    playing = true;
    
    playSound()

  }
  //console.log("button press")

  if(button.value != "Pause"){
    button.value = "Pause";
  }
  else{
    button.value = "Play"
  }

  //beat.play()
}

button.onclick = function() {
  buttonplay()
  button.blur()
}
onkeydown = function(e) {
  if (e.key == " " ||
  e.code == "Space" ||      
  e.keyCode == 32 )     

 {
  buttonplay()
  button.blur()
}
}





inputbutton.onclick = function(){
  if(inputbox.style.opacity == "0"){
    playing = false;
    inputbox.style.opacity = "1.0";
    inputbox.focus();
    button.value = "Set and Play"
  }
  else{
    inputbox.style.opacity = "0.0";
  }
}