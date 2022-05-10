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
  switch(evt.key){
    case 'a':
      image.src = "KeyA.png";
      break;
    case 'b':
      image.src = "KeyB.png";
      break;
    case 'c':
      image.src = "KeyC.png";
      break;
    case 'd':
      image.src = "KeyD.png";
      break;
    case 'e':
      image.src = "KeyE.png";
      break;
    case 'f':
      image.src = "KeyF.png";
      break;
    case 'g':
      image.src = "KeyG.png";
      break;
    case 'h':
      image.src = "KeyH.png";
      break;
    case 'i':
      image.src = "KeyI.png";
      break;
    case 'j':
      image.src = "KeyJ.png";
      break;
    case 'k':
      image.src = "KeyK.png";
      break;
    case 'l':
      image.src = "KeyL.png";
      break;
    case 'm':
      image.src = "KeyM.png";
      break;
    case 'n':
      image.src = "KeyN.png";
      break;
    case 'o':
      image.src = "KeyO.png";
      break;
    case 'p':
      image.src = "KeyP.png";
      break;
    case 'q':
      image.src = "KeyQ.png";
      break;
    case 'r':
      image.src = "KeyR.png";
      break;
    case 's':
      image.src = "KeyS.png";
      break;
    case 't':
      image.src = "KeyT.png";
      break;
    case 'u':
      image.src = "KeyU.png";
      break;
    case 'v':
      image.src = "KeyV.png";
      break;
    case 'w':
      image.src = "KeyW.png";
      break;
    case 'x':
      image.src = "KeyX.png";
      break;
    case 'y':
      image.src = "KeyY.png";
      break;
    case 'z':
      image.src = "KeyZ.png";
      break;
  }
})

$( "#refresh" ).click(function() {
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


function shareLink() {
    navigator.clipboard.writeText('www.youtube.com');
  
    /* Alert the copied text */
    alert("link copied! lol u want more people to see this? ok");
  }