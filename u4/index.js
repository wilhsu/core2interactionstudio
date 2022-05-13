let apiData;
let apiURL = 'https://api.airtable.com/v0/appsRDFKsY4qgBqMy/tblZlrHgf0X3En3KJ?api_key=keyRsJYzEsQrpUF9n';

async function getData(url){
  let response = await fetch(url);
  let jsonData = await response.json();
  return jsonData;
}

let image = document.getElementById("imagecontainer");
let text = document.getElementById("text");

let keyspressed = [];

document.addEventListener('keydown', function(evt){
  console.log(evt.code, evt.key);
  // text.innerHTML += evt.code;
  keyspressed.push(evt.key);
})

document.addEventListener('keyup', function(evt){

  let alphIMG = document.createElement("img");
  // alphIMG.classList.add("image");
  let keyentered = (evt.code);
  alphIMG.src = keyentered + '.png';
  document.querySelector("#imagecontainer").append(alphIMG);

  const slider = document.getElementById('Slider');
  slider.addEventListener('input', handleChange);

  function handleChange(e) {
    // const img = document.getElementById("imagecontainer");
    const {value, max} = e.target;
    alphIMG.style.width = `${value*max}px`;
    // img.style.height = `${value*max}%`;
  }
  
})


function showHide(haha){
	let x = document.getElementById(haha);
	if (x.style.display == "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}


$( "#refresh" ).click(function refresh() {
  $( "#imagecontainer" ).empty();
});


// async function main(){
//   apiData = await getData(apiURL);
//   console.log(apiData);
  

//   // reducing the array and making it simpler
//   for( let i = 0; i < apiData.object; i++){
//     let alph = apiData.records[i].fields.alphabet;
//     console.log(alph);  

//       let alphabetimg = document.createElement("img");
//       // alphabetimg.classList.add("image");
//       alphabetimg.src = apiData.records[i].fields.img[0].url;
//       document.querySelector(".glyphshere").appendChild(alphabetimg);
//   }
// }

// main();
function saveimg(){
  html2canvas(document.querySelector("#imagecontainer")).then(canvas => {
    // document.body.appendChild(canvas);
    // console.log(canvas.toDataURL("image/jpeg", 0.9));
  });
}
  // var ajax = new XMLHttpRequest();
  // var canvas = document.querySelector("#imagecontainer");
  // ajax.open("POST", "save-capture.php", true);
  // ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  // ajax.send("image=" + canvas.toDataURL("image/jpeg", 0.9));

  // ajax.onreadystatechange = function(){
  //   if (this.readyState == 4 && this.status == 200){
  //     console.log(this.responseText);
  //   }
  // }
// }

var element = $("#imagecontainer"); // global variable
var getCanvas; // global variable
$('document').ready(function(){
  html2canvas(element, {
    onrendered: function (canvas) {
      $("#previewImage").append(canvas);
      getCanvas = canvas;
    }
  });
});
$("#download").on('click', function () {
  var imageData = getCanvas.toDataURL("image/png");
  // Now browser starts downloading it instead of just showing it
  var newData = imageData.replace(/^data:image\/png/, "data:application/octet-stream");
  $("#download").attr("download", "image.png").attr("href", newData);
});

function shareLink() {
    var link = "hello";
    navigator.clipboard.writeText(link);
  
    /* Alert the copied text */
    alert("link copied! lol u want more people to see this? ok");
  }

  function sorryxd(){
    alert("lmao i did not figure out how 2 code this so u gotta screenshot da image!!sorry babes!! xddd");
  }