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

          let manufacturers = apiData.records[i].fields.manufacturer;
          Audio.src = 
          'assets/audio/' + 
          'ringtone_' + manufacturers + '.mov';
    })
  }
}



main();

// // var airtable = require("airtable");
// // var base = new airtable({ apiKey: 'keyRsJYzEsQrpUF9n'}).base('tblb85lWYZDPksPv2'
// // );

// // base("XD").select()

// //the html elements we want to access
// const image_container = document.getElementById("image_container");

// //fetching the data from airtable base
// async function fetchData(url){
//   let response = await fetch(url);   //server sends a response
//   let jsonData = await response.json();   //convert the response into a json format
//   return jsonData; //this line returns a json object 
// }

// //storing that fetched data into our array 'apiData'
// async function getData(){
//   let data = await fetchData(apiURL); //call the fetchData function and store json in 'data' variable

//   //iterate over the above data and pull out only the required fields. 
//   //we dont need all the extra info like the field id and all that Airtable returns
//   //so instead, we will only store our main content which lives in records.fields
//   for(let i =0; i<data.records.length; i++){
//     let record = data.records[i].fields;
//     apiData.push(record); //push those records into apiData to make a clean array

//         // let model = apiData.records[i].fields.model;
//         // let heading = document.createElement("h2");
//         // heading.innerHTML = model;
//         // document.body.appendChild(heading);
        
//         let image = document.createElement("img");
//         image.src = apiData.records[i].fields.img.url;
//         image.className = "images" + i;
//         document.body.appendChild(image);

//         // let man = document.createElement("h3");
//         // man.innerHTML = apiData.records[i].fields.manufacturer;
//         // document.body.appendChild(man);
//   }
// }

// getData();
