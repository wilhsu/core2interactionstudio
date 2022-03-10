window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    document.getElementById("head").style.fontSize = "35px";
    document.getElementById("sub").style.color = "rgba(208,0,0,0)";
  } else {
    document.getElementById("head").style.fontSize = "200px";
    document.getElementById("sub").style.color = "rgba(208,0,0,0.8)";
  }
}



function showHide(name){
	let x = document.getElementById(name);
	if (x.style.display == "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

function buff() {
location.reload();
}
