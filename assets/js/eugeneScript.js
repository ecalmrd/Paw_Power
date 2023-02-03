
//googlemaps API variables
var googlemapsAPI = "AIzaSyCTQVOisLUpvEpoW30CiZlKlPdNMUiX8J4";
var googlemapsAddress
var googlemapsURL = "https://www.google.com/maps/embed/v1/place?key=" + googlemapsAPI + "&q=" + googlemapsAddress;

//petfinder API variables
var petfinderAnimalsAPI = "https://api.petfinder.com/v2/animals";
var petfinderBreedsAPI = "https://api.petfinder.com/v2/types/{type}/breeds"
var petfinderOrgAPI = "https://api.petfinder.com/v2/organizations";

//Pet Profile Page variables



fetch('https://api.petfinder.com/v2/oauth2/token', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `grant_type=client_credentials&client_id=${ID}&client_secret=${secret}`
}).then((response) => {
    return response.json()
}).then((response) => {
    console.log(response)
    token = response.access_token
    console.log(token)
    //change query parameters here
    fetch('https://api.petfinder.com/v2/animals?type=dog&page=2', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((response) => {
        return response.json()        
    }).then((response) => {
        console.log(response.animals)
    })
})

//this code will take animal characteristics from petfinder API 
//and display in profile page

function perCharacteristics() {


}