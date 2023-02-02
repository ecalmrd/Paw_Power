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


// create search bar to add location

//Pseudo Code for browsing pets apage
// This page includes a location bar at top and how many miles within current location

// Filter options to sort distance from nearest to farthest

// Additional filters to include age, breed, color, size, gender, coat, etc

// When browsing, each profile will display a picture of the pet and include basic information such as age, name, breed, and distance.

// Each profile will have option to favorite a pet

