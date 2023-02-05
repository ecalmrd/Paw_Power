
//googlemaps API variables
var googlemapsAPI = "AIzaSyCTQVOisLUpvEpoW30CiZlKlPdNMUiX8J4";
var googlemapsAddress
var googlemapsURL = "https://www.google.com/maps/embed/v1/place?key=" + googlemapsAPI + "&q=" + googlemapsAddress;

//petfinder API variables
var petfinderAnimalsAPI = "https://api.petfinder.com/v2/animals";
var petfinderBreedsAPI = "https://api.petfinder.com/v2/types/{type}/breeds"
var petfinderOrgAPI = "https://api.petfinder.com/v2/organizations";

var ID = 'EmpbeFp7f6MKXl7XkxoSG64fRk4kLmwsy3mkt1KGUpsZunCWBp'
var secret = 'fb4tKOw40Veks4aKEFdaZ5yQPl5SgwfxzsFDemc2'
var token;

//pet details for queryparameters
// type is referring to if dog or cat
var story= $('#story'); 
var petPics= $('#petPics');
var petNameEl= $('#petname');
var typeEl= $('#type');
var breedEl= $('#breed');
var ageEl= $('#age');
var genderEl= $('#gender');
var colorEl= $('#color');
var locationEl= $('#location');

// for query parameter later "&age=" age + "&gender=" + gender + "&color=" + color + "&location=" + location

fetch('https://api.petfinder.com/v2/oauth2/token', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `grant_type=client_credentials&client_id=${ID}&client_secret=${secret}`
}).then((response) => {
    return response.json()
}).then((response) => {
    // console.log(response)
    token = response.access_token
    // console.log(token)
    //change query parameters here
    fetch('https://api.petfinder.com/v2/animals?type=', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data.animals)
        typeEl.text(data.animals[0].species)
        breedEl.text(data.animals[0].breeds.primary)
        ageEl.text(data.animals[0].age)
        genderEl.text(data.animals[0].gender)
        colorEl.text(data.animals[0].colors.primary)
        locationEl.text(data.animals[0].distance)
        petNameEl.text(data.animals[0].name)
        story.text(data.animals[0].description)
        replacePlaceholder(data)
    })
});

function replacePlaceholder(data) {
    if (data.animals[0].photos[0].full) {
        petPics.attr('src', data.animals[0].photos[0].full);
        console.log(data.animals[0].photos[0].full)
    }};


















//code to show current location
//https://developers.google.com/maps/documentation/javascript/geolocation#maps_map_geolocation-javascript
// let map, infoWindow;
// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 6,
//     });
//     infoWindow = new google.maps.InfoWindow();

//     const locationButton = document.createElement("button");

//     locationButton.textContent = "Pan to Current Location";
//     locationButton.classList.add("custom-map-control-button");
//     map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
//     locationButton.addEventListener("click", () => {
//         // Try HTML5 geolocation.
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const pos = {
//                         lat: position.coords.latitude,
//                         lng: position.coords.longitude,
//                     };

//                     infoWindow.setPosition(pos);
//                     infoWindow.setContent("Location found.");
//                     infoWindow.open(map);
//                     map.setCenter(pos);
//                 },
//                 () => {
//                     handleLocationError(true, infoWindow, map.getCenter());
//                 }
//             );
//         } else {
//             // Browser doesn't support Geolocation
//             handleLocationError(false, infoWindow, map.getCenter());
//         }
//     });
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//     infoWindow.setPosition(pos);
//     infoWindow.setContent(
//         browserHasGeolocation
//             ? "Error: The Geolocation service failed."
//             : "Error: Your browser doesn't support geolocation."
//     );
//     infoWindow.open(map);
// }

// window.initMap = initMap;

//end of current location code



//Pet Profile Page variables

