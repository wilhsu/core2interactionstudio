let apiData = [];
let apiURL = 'https://api.airtable.com/v0/appY3hITnlFZgs6DH/tblb85lWYZDPksPv2?api_key=keyRsJYzEsQrpUF9n';

// unique categories 
let yearReleased = [];
let manufacturedBy = [];

const select_menu = document.getElementById("year_select");
const select_menutwo = document.getElementById("manufacturer_select");
const image_container = document.getElementById("image_container");


// only to reequest data from the api
async function fetchData(url){
    let response = await fetch(url);
    let jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
}

// which will also push data into apiData[] to make it more usable 
async function getData(){
    let data = await fetchData(apiURL);
    

    // reducing the array and making it simpler
    for( let i=0; i<data.records.length; i++){
        let record = data.records[i].fields;
        apiData.push(record);
    }

    makeDropdown();

    console.log(apiData);

    // making an EVENTLISTENER on html element
    select_menu.addEventListener('change', function handleChange(event){
        yearSearch();
        console.log("succesfully searched");
    })

    select_menutwo.addEventListener('change', function handleChange(event){
        manufacturerSearch();
        console.log("succesfully searched");
    })
}

getData();

// can make anything like makEDIV BAH 
function makeDropdown(){
    // iterate over all the description (cartoon shows)
    for(let i=0;i<apiData.length;i++){
        let yr = apiData[i].year;
        let mb = apiData[i].manufacturer;
        yearReleased.push(yr);
        manufacturedBy.push(mb);
    };

    yearReleased = removeDuplicates(yearReleased);
    manufacturedBy = removeDuplicates(manufacturedBy);

    console.log(yearReleased);
    console.log(manufacturedBy);

    yearReleased.forEach(element => {
        let newOption = document.createElement("option");
        newOption.className = "option";
        newOption.innerHTML = element;
        newOption.value = element;
        select_menu.appendChild(newOption);
    })

    manufacturedBy.forEach(element => {
        let newOption = document.createElement("option");
        newOption.className = "option";
        newOption.innerHTML = element;
        newOption.value = element;
        select_menutwo.appendChild(newOption);
    })
}

function removeDuplicates(arr){
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// to search for correct image and years
function yearSearch(){
    console.log(select_menu.value);

    // filter function
    const results = apiData.filter((entry) => {
        const match = entry.year.includes(select_menu.value);
        return match;
    })

    renderSortedImages(results, image_container);
}

function manufacturerSearch(){
    console.log(select_menutwo.value);

    // filter function
    const results = apiData.filter((entry) => {
        const match = entry.manufacturer.includes(select_menutwo.value);
        return match;
    })

    renderSortedImages(results, image_container);
}



function renderSortedImages(sortedData, container){
    container.innerHTML = "";

    sortedData.forEach((entry, index) => {
        const image = document.createElement("img");
        image.src = entry.img[0].url;
        container.appendChild(image);
    })

}

// results are not eliminating from the secondary filter