function init(){
  var h1tags = document.getElementsByTagName('h1');

  h1tags[0].onclick = changeColor;
}

function changeColor(){
  this.innerHTML = "Click again";

  var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

  this.style.color = randomColor;
}

function toggleImg(){
  var img = document.getElementById("pugImg");
  var isImgVisible = img.style.visibility != "visible";
  img.style.visibility = isImgVisible ? "visible" : "hidden";
}

onload = init;
