const ALL_COUNTRIES_URL = "https://restcountries.eu/rest/v2/all";
const COUNTRIES_SECTION = document.getElementById("countries");
const INFO = document.getElementById("info");

function fetchAllCountries(){

    fetch(ALL_COUNTRIES_URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        
        INFO.innerText = "Showing " + data.length + " countries";

        for(let i =0; i < data.length;i++){
            console.log(data[i].name);
            
            const newFlag = document.createElement("img");
            newFlag.src = data[i].flag;
            newFlag.style = "width: 40px";

            const newName = document.createElement("div");
            newName.innerText = data[i].name;
            newName.classList.add("country-text");

            const newCountry = document.createElement("div");
            newCountry.appendChild(newFlag);
            newCountry.appendChild(newName);
            //newCountry.innerText = data[i].name;
            newCountry.classList.add("country-card");
            COUNTRIES_SECTION.appendChild(newCountry);

        }
    });

}

fetchAllCountries();

/*
function fetchDogImage(){

    fetch(DOG_URL)
    .then(function(response) {
        return response.json();
        spinner.setAttribute("display", "block");
    })
    .then(function(data) {
        spinner.setAttribute("display", "none");
        console.log(data);
        const newImg = document.createElement('img');
        newImg.src = data.message;
        newImg.alt = "another-dog";
        document.querySelector(".doggos").appendChild(newImg);
    });

}
*/
