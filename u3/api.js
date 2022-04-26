let apiURL = "https://api.airtable.com/v0/appY3hITnlFZgs6DH/tblb85lWYZDPksPv2?api_key=keyRsJYzEsQrpUF9n"

let apiData;

let cartoonShows = [];
// let yearReleased = [];

// const dropmenu = document.getElementById("options");


async function getData(url){
    let response = await fetch(url);
    let jsonData = await response.json()
    return jsonData;
}


async function main(){
    apiData = await getData(apiURL);
    console.log(apiData);

    for (let i = 0; i < 100; i++){
        let model = apiData.records[i].fields.model;
        let heading = document.createElement("h2");
        heading.innerHTML = model;
        document.body.appendChild(heading);
        
        let image = document.createElement("img");
        image.src = apiData.records[i].fields.img[0].url;
        image.className = "images" + i;
        document.body.appendChild(image);

        let man = document.createElement("h3");
        man.innerHTML = apiData.records[i].fields.manufacturer;
        document.body.appendChild(man);

        // let yr = document.createElement("p");
        // yr.innerHTML = apiData.records[i].fields.year;
        // document.body.appendChild(yr);

        // let yearReleased = document.createElement("div");
        // yearReleased.innerHTML = apiData.records[i].fields.year;
        // document.body.appendChild(yearReleased);

        // let images = apiData.records[i].fields.img.url;
        // let img = document.createElement("img");
        // img.innerHTML = images;
        // document.body.appendChild(img);
    }
}



main();


makeDropdown(); //call this function to make your select menu

//add an event listener to the menu
//this will change the images in image div on value change
select_menu.addEventListener('change', function handleChange(event) {
  //console.log(select_menu.options[select_menu.selectedIndex].value);
  imageSearch();
});


//this function makes our non-duplicated drop down menu to select characters from various cartoons
function makeDropdown(){
//iterate over apiData to get all the show names and push them in our array
for(let i =0 ; i<apiData.length; i++){
  let showName = apiData[i].year;
  cartoonShows.push(showName);
}

//using remove duplicates function, remove the duplicate entries
cartoonShows = removeDuplicates(cartoonShows);
console.log(cartoonShows);

//for every show in the array, create a new option in the select element of our html
cartoonShows.forEach(element => {
  let option = document.createElement("option");
  option.className = "options"
  option.innerHTML = element;
  option.value = element;
  select_menu.appendChild(option);
});
}


//function to remove duplicate entries in an array
function removeDuplicates(arr) {
return arr.filter((item, 
    index) => arr.indexOf(item) === index);
}

//function to search for correct characters and display their image
function imageSearch(){
console.log(select_menu.value);

//filter() can only be used with an array.
//we filter our apiData array to find all entries that contain the selected cartoon show in the menu
const results = apiData.filter((entry) => {
    const descriptionMatch = entry.year.includes(select_menu.value);
    return descriptionMatch;
});

//we render/show the images belonging to each of those characters
renderSortedImages(results, image_container);
}


//this function shows the images belonging to a data row
function renderSortedImages(data, container){
container.innerHTML = "";

data.forEach((entry, index) => {
    const image = document.createElement("img");
    image.src = entry.img[0].url;

    container.appendChild(image);
});
}

//finally using our getData function to do everything above
//IMPORTANT
getData();