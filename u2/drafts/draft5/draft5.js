window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    document.getElementById("head").style.fontSize = "35px";
    document.getElementById("sub").style.color = "rgba(208,0,0,0)";
  } else {
    document.getElementById("head").style.fontSize = "200px";
    document.getElementById("sub").style.color = "rgba(208,0,0,0.8)";
  }
}

// window.onscroll = function() {bottomFunction()};

// function bottomFunction(){
//   if (document.body.scrollBottom > 5 || document.documentElement.scrollBottom > 5) {
//     document.location("#topxd");
//   }
// }

// function buff() {
// location.getElementById("#topxd");
// }

// function buff() {
//   if (document.body.scrollBottom < 10 || document.documentElement.scrollBottom < 10) {
// location.reload();
// } else {

// }
// }


function showHide(name) {
  let x = document.getElementById(name);{
    if (x.style.display == "block"){
    x.style.display = "none";
  } else{
    x.style.display = "block";
  }
}
}