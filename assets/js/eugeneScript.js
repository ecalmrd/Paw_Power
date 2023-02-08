
//googlemaps API variables
var googlemapsAPI = "AIzaSyCTQVOisLUpvEpoW30CiZlKlPdNMUiX8J4";
var googlemapsAddress
var googlemapsURL = "https://www.google.com/maps/embed/v1/place?key=" + googlemapsAPI + "&q=" + googlemapsAddress;

//petfinder API variables
var animalAPI = "https://api.petfinder.com/v2/animals?type=";
var organizationAPI = "https://api.petfinder.com/v2/organizations?name=";
var petIDAPI = "https://api.petfinder.com/v2/animals/{id}";
var ID = 'EmpbeFp7f6MKXl7XkxoSG64fRk4kLmwsy3mkt1KGUpsZunCWBp'
var secret = 'fb4tKOw40Veks4aKEFdaZ5yQPl5SgwfxzsFDemc2'
var token;

// variables to DOM maniplate and add pet details to HTML
var story = $('#story');
var petPics = $('#petPics');
var petNameEl = $('#petname');
var typeEl = $('#type');
var breedEl = $('#breed');
var ageEl = $('#age');
var genderEl = $('#gender');
var colorEl = $('#color');
var locationEl = $('#location');
var animalPhotosArray;

//organization's contact information variables
var orgnameEl = $('#orgName');
var orgphoneNumberEl = $('#phoneNumber');
var orgemailEl = $('#email');
var orgaddressEl = $('#urlAddress');


//function to fetch oauth token, animal and organization information 
fetchData = () => {
    // this will fetch oauth2 token
    fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `grant_type=client_credentials&client_id=${ID}&client_secret=${secret}`
    })
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            // console.log(response)
            token = response.access_token
            // console.log(token)

            // this will fetch animals information
            fetch('https://api.petfinder.com/v2/animals?type=', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    console.log(data.animals)
                    animalPhotosArray = data.animals[0].photos // this acquires obtains the array from photos

                    //this displays the pet details on html page, replacing the placeholder text
                    typeEl.text(data.animals[0].species)
                    breedEl.text(data.animals[0].breeds.primary)
                    ageEl.text(data.animals[0].age)
                    genderEl.text(data.animals[0].gender)
                    colorEl.text(data.animals[0].colors.primary)
                    locationEl.text(data.animals[0].distance)
                    petNameEl.text(data.animals[0].name)
                    story.text(data.animals[0].description)

                    replacePlaceholder(data) //function to replace image place holder to pet's profile image
                    colorGender(data) //function to add color to profile based on pet's gender
                });

            // this will fetch pet organization's information
            fetch('https://api.petfinder.com/v2/organizations', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    console.log(data.organizations)

                    //displays organization contact information at bottom right column
                    orgnameEl.text(data.organizations[0].name)
                    orgphoneNumberEl.text(data.organizations[0].phone)
                    orgemailEl.text(data.organizations[0].email)
                    orgaddressEl.html(`<a href="${data.organizations[0].url}" target="_blank"> ${data.organizations[0].url} </a>`);
                });

        });
};
// end of fetch function
fetchData();



//function to replace image place holder to pet's profile image
function replacePlaceholder(data) {
    if (data.animals[0].photos[0].full) {
        petPics.attr('src', data.animals[0].photos[0].full);
        console.log(data.animals[0].photos[0].full)
    }
};

//function to add color to profile based on pet's gender
function colorGender(data) {
    var profileContainer = $('#profileContainer');
    if (data.animals[0].gender === "Male") {
        console.log(data.animals[0].gender)
        profileContainer.addClass('has-background-info-light')
    } else {
        profileContainer.addClass('has-background-danger-light')
    }
};

// Function to navigate additional pet's images
var nextButton = $('#nextBtn');
var prevButton = $('#prevBtn');
var currentIndex = 0
var currentImage;

function pictureNavigate() {
    animalPhotosArray
    if (!animalPhotosArray || animalPhotosArray.length === 0) {
        return;
    }
    currentImage = animalPhotosArray[currentIndex].full
    petPics.attr('src', currentImage);
    console.log(currentImage)
    console.log(currentIndex)
};

//pictureNavigate button event listeners
nextButton.click(function (event) {
    event.stopPropagation();
    if (currentIndex > 0) {
        currentIndex--
    }
    pictureNavigate();
    petPics.attr('src', currentImage);
});

prevButton.click(function (event) {
    event.stopPropagation();
    if (currentIndex < animalPhotosArray.length - 1) {
        currentIndex++ 
    }
    pictureNavigate();
    petPics.attr('src', currentImage);
});



    
// //code to show current location https://developers.google.com/maps/documentation/javascript/geolocation#maps_map_geolocation-javascript
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

// // end of current location code