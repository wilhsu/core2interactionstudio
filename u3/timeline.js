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
    apiData = await getData(apiURL);
    console.log(apiData);

        for(let i = 0; i < apiData.records.length; i++){
    
            let yearsCon = document.getElementsByClassName("years")[0];
            let container = document.getElementById("con2");
            let genCount = 0;

            console.log(apiData);

            let yearsConCopy = yearsCon.cloneNode(true);
            console.log(yearsConCopy);
            genCount++;
            console.log(genCount);
            container.appendChild(yearsConCopy);
    
            yearsConCopy.querySelector("#yr").append(apiData.records[i].fields.year);
            yearsConCopy.querySelector("#model").append(apiData.records[i].fields.model);
            yearsConCopy.querySelector(".phoneimg").src = apiData.records[i].fields.img[0].url;
        }
}



main();