// dropdown menu 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.options')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// 
// let apiURL = 'https://api.airtable.com/v0/appY3hITnlFZgs6DH/tblb85lWYZDPksPv2?api_key=keyRsJYzEsQrpUF9n';
// let apiData;
// let genCount=0;

// async function getData(url){
//     //response I get from my client API
//     let response = await fetch(url);
//     let jsonData = await response.json()
//     return jsonData;
// }

// async function main(){

//     const container = document.getElementById("con2");

//     apiData = await getData(apiURL);
//     console.log(apiData);


//     for(let i = 0; i < apiData.records.length; i++){

//       let year = document.getElementsByClassName("years")[0];
//       // let container = document.getElementById("allBooks");

//       let yearCopy = year.cloneNode(true);
//       console.log(yearCopy);
//       genCount++;
//       console.log(genCount);
//       // container.appendChild(yearCopy);

//       yearCopy.querySelector("#yr").src = apiData.records[i].fields.year;

// }
// }

// main();