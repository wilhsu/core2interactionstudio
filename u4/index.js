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
    var link = "hello";
    navigator.clipboard.writeText(link);
  
    /* Alert the copied text */
    alert("link copied! lol u want more people to see this? ok");
  }