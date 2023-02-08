
// Pseudo Code for Home Page
$(document).ready(function () {

    var n1;
    var n2;
    var n3;
    var n4;
    var d1;
    var d2;
    var d3;
    var d4;
    var p1;
    var p2;
    var p3;
    var p4;

    document.getElementById("results").style.display = 'none'

    var ID = 'EmpbeFp7f6MKXl7XkxoSG64fRk4kLmwsy3mkt1KGUpsZunCWBp'
    var secret = 'fb4tKOw40Veks4aKEFdaZ5yQPl5SgwfxzsFDemc2'
    var token;

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

    function petDeets() {
        n1 = response.animals[0].name;
        d1 = response.animals[0].description;
        p1 = response.animals[0].photos[0].medium
        n2 = response.animals[1].name;
        d2 = response.animals[1].description;
        n3 = response.animals[2].name;
        d3 = response.animals[2].description;
        n4 = response.animals[3].name;
        d4 = response.animals[3].description;
        document.getElementById("name-1").innerHTML = n1;
        document.getElementById("desc-1").innerHTML = d1;
        document.getElementById("name-2").innerHTML = n2;
        document.getElementById("desc-2").innerHTML = d2;
        document.getElementById("name-3").innerHTML = n3;
        document.getElementById("desc-3").innerHTML = d3;
        // document.getElementById("name-4").innerHTML=n4;
        // document.getElementById("desc-4").innerHTML=d4;    
    }



    // Create add event listeners for adopting cat or dog
    $('#catbutton').on("click", function (e) {
        console.log('I choose cats!')
        document.getElementById("results").style.display = 'block';
        chooseCat();

    });
    // Choosing a cat will display all cats
    function chooseCat() {
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
            //change query parameters here
            fetch('https://api.petfinder.com/v2/animals?type=cat&page=4', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((response) => {
                return response.json()
            }).then((response) => {
                console.log(response.animals)
                n1 = response.animals[0].name;
                d1 = response.animals[0].description;
                n2 = response.animals[1].name;
                d2 = response.animals[1].description;
                n3 = response.animals[2].name;
                d3 = response.animals[2].description;
                n4 = response.animals[3].name;
                d4 = response.animals[3].description;
                document.getElementById("name-1").innerHTML = n1;
                document.getElementById("desc-1").innerHTML = d1;
                document.getElementById("name-2").innerHTML = n2;
                document.getElementById("desc-2").innerHTML = d2;
                document.getElementById("name-3").innerHTML = n3;
                document.getElementById("desc-3").innerHTML = d3;
                // document.getElementById("name-4").innerHTML=n4;
                // document.getElementById("desc-4").innerHTML=d4;  

            })
        })
    }


    // Choosing a dog will display all dogs
    $('#dogbutton').on("click", function (e) {
        console.log('I choose dogs!')
        document.getElementById("results").style.display = 'block';
        chooseDog();

    });

    function chooseDog() {
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
            //change query parameters here
            fetch('https://api.petfinder.com/v2/animals?type=dog&page=4', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((response) => {
                return response.json()
            }).then((response) => {
                console.log(response.animals)
                n1 = response.animals[0].name;
                d1 = response.animals[0].description;
                n2 = response.animals[1].name;
                d2 = response.animals[1].description;
                n3 = response.animals[2].name;
                d3 = response.animals[2].description;
                n4 = response.animals[3].name;
                d4 = response.animals[3].description;
                document.getElementById("name-1").innerHTML = n1;
                document.getElementById("desc-1").innerHTML = d1;
                document.getElementById("name-2").innerHTML = n2;
                document.getElementById("desc-2").innerHTML = d2;
                document.getElementById("name-3").innerHTML = n3;
                document.getElementById("desc-3").innerHTML = d3;
                // document.getElementById("name-4").innerHTML=n4;
                // document.getElementById("desc-4").innerHTML=d4;        
            })
        })
    }

    // optional: browse both cats and dogs
    $('#petbutton').on("click", function (e) {
        console.log('Surprise me!')
        document.getElementById("results").style.display = 'block';
        choosePet();

    });

    function choosePet() {
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
            //change query parameters here
            fetch('https://api.petfinder.com/v2/animals?type=dog&page=2', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((response) => {
                return response.json()
                //   
            }).then((response) => {
                console.log(response.animals)
                n1 = response.animals[0].name;
                d1 = response.animals[0].description;
                n2 = response.animals[1].name;
                d2 = response.animals[1].description;
                n3 = response.animals[2].name;
                d3 = response.animals[2].description;
                n4 = response.animals[3].name;
                d4 = response.animals[3].description;
                document.getElementById("name-1").innerHTML = n1;
                document.getElementById("desc-1").innerHTML = d1;
                document.getElementById("img-1").innerHTML = p1
                document.getElementById("name-2").innerHTML = n2;
                document.getElementById("desc-2").innerHTML = d2;
                document.getElementById("name-3").innerHTML = n3;
                document.getElementById("desc-3").innerHTML = d3;
                // document.getElementById("name-4").innerHTML=n4;
                // document.getElementById("desc-4").innerHTML=d4;        
            })
        })
    }



    // create search bar to add location
    var location = document.getElementById('search').value
    var

    //Pseudo Code for browsing pets apage
    // This page includes a location bar at top and how many miles within current location

    // Filter options to sort distance from nearest to farthest

    // Additional filters to include age, breed, color, size, gender, coat, etc

    // When browsing, each profile will display a picture of the pet and include basic information such as age, name, breed, and distance.

    // Each profile will have option to favorite a pet



})

