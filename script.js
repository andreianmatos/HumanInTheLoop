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
  setTimeout(() => {  s = document.getElementById("sound1"); s.play(); x.style.display = "block"; x.innerHTML = "NOTIFICATION ONE";}, 4000);
  setTimeout(() => {  x.style.display = "none";}, 6000);
  setTimeout(() => {  s = document.getElementById("sound2"); s.play(); x.style.display = "block"; x.innerHTML = "NOTIFICATION TWOO" }, 10000);
  setTimeout(() => {  x.style.display = "none";}, 12000);
  setTimeout(() => {  s = document.getElementById("sound3"); s.play(); x.style.display = "block"; x.innerHTML = "NOTIFICATION FINAL" }, 20000);
  setTimeout(() => {  x.style.display = "none";}, 22000);
}




