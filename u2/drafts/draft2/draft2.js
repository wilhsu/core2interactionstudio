window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    document.getElementById("head").style.fontSize = "35px";
    // document.getElementById("book").style.textAlign = "right";
    document.getElementById("sub").style.color = "rgba(75,79,61,0)";
  } else {
    document.getElementById("head").style.fontSize = "200px";
    // document.getElementById("book").style.textAlign = "left";
    document.getElementById("sub").style.color = "rgba(75,79,61,0.8)";
  }
}