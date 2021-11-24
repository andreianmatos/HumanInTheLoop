// before 

function start() {
}   

// other functions 

function show(item){
  if(document.getElementById(item).style.display == "none"){
    document.getElementById(item).style.display="block";

  }
  else{
    document.getElementById(item).style.display="none";
  }
}

function notification(){
  var x = document.getElementById("txt");
  var s;
  var popup = document.getElementById("donePopup");

  setTimeout(() => {  s = document.getElementById("sound1"); s.play(); x.style.display = "block"; x.innerHTML = "NOTIFICATION ONE";}, 4000);
  setTimeout(() => {  x.style.display = "none";}, 6000);
  setTimeout(() => {  s = document.getElementById("sound2"); s.play(); x.style.display = "block"; x.innerHTML = "NOTIFICATION TWOO" }, 10000);
  setTimeout(() => {  x.style.display = "none";}, 12000);
  setTimeout(() => {  s = document.getElementById("sound3"); s.play(); x.style.display = "block"; x.innerHTML = "NOTIFICATION FINAL" }, 20000);
  setTimeout(() => {  x.style.display = "none";}, 22000);

  // pop up after video is over, put size of video in miliseconds
  setTimeout(() => { popup.style.display = "block"; popup.innerHTML = '<a type="button" class="custombutton" href="endPage.html">DONE</a>';}, 25000);
  
}




