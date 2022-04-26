// let apiData = [];

//put your api URL from airtable in this variable
let apiURL = 'https://api.airtable.com/v0/appY3hITnlFZgs6DH/tblb85lWYZDPksPv2?api_key=keyRsJYzEsQrpUF9n';
let apiData;

//this is where you 'call' your data

//asynchronous
async function getData(url){
    //response I get from my client API
    let response = await fetch(url);
    let jsonData = await response.json()
    return jsonData;
}

async function main(){

    const container = document.getElementById("con2");

    apiData = await getData(apiURL);
    console.log(apiData);

    for(let i = 0; i < apiData.records.length; i++){

        let name = apiData.records[i].fields.model;
        console.log(name);
        // let box = document.createElement("div");

        // let heading = document.createElement("h2");
        // heading.innerHTML = name;
        // document.body.appendChild(heading);

        let phoneImage = document.createElement("img");
	      phoneImage.classList.add("image");
	      phoneImage.src = apiData.records[i].fields.img[0].url;
	      document.querySelector(".con2").append(phoneImage);

        phoneImage.addEventListener('click', () =>{
          let modelName = document.createElement("h3");
          modelName.innerHTML = name;
          modelName.src = apiData.records[i].fields.model;
          console.log(modelName);
          document.querySelector(".textah").append(modelName);

          let ring = document.createElement("audio").play();
          console.log(Audio.src);
          document.getElementsByTagName("audio");
          let manufacturers = apiData.records[i].fields.manufacturer;
          Audio.src = 
          'assets/audio/' + 
          'ringtone_' + manufacturers + '.mov';
          document.getElementById('song').innerHTML = '<audio id="audio-player" autoplay src="'+ Audio.src +'" type="audio/mov">';
    })
  }
}



main();