// Pseudo Code for Home Page

// curl -d "grant_type=client_credentials&client_id=EmpbeFp7f6MKXl7XkxoSG64fRk4kLmwsy3mkt1KGUpsZunCWBp&client_secret=fb4tKOw40Veks4aKEFdaZ5yQPl5SgwfxzsFDemc2" https://api.petfinder.com/v2/oauth2/token

// curl -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJFbXBiZUZwN2Y2TUtYbDdYa3hvU0c2NGZSazRrTG13c3kzbWt0MUtHVXBzWnVuQ1dCcCIsImp0aSI6IjNjZGNkMGNiZTM5NDE3OWQzMTlhMDRiNDNhMjNiZGY3MDcyNDgxOWEzMWJhMDY1OTg3ZjlmYjY2MjM4ZTU2NjM2MGNkMDkwOTc0YzI0YTFmIiwiaWF0IjoxNjc1MzA2MjE5LCJuYmYiOjE2NzUzMDYyMTksImV4cCI6MTY3NTMwOTgxOSwic3ViIjoiIiwic2NvcGVzIjpbXX0.MxYK9LEGaZKUbBafZwajGVPzB1WEoUBInKbzzyogRDDrhJWHnE9SvmWxfQ_dmhgP4wXko4ibRoxD0JC5kJck8td7zShoEtZtwaT2PZu1PgRdNgn_9YFJdGwVUnfz6m_wKTNfep9eFWNz_C5pFS2hLAGQYUMCOvVx01CHjXofVrqdR4CeYgZcQag3ftspmlpNSQX8VhKyOokVg1bxF1UIKRyJMTDrtp9nmwpaFwlAa_s_FzNK6TM8MKAkw3C66gTEcl7Cuj15WIyt0NpJVcwS_A7-jOExoe8zRm8UZK7VvmYHTdNi26WI0SuV49f4P3LbAKOClLSyJs_taMioeQ582w" GET https://api.petfinder.com/v2/types/cat



// var ID= 'EmpbeFp7f6MKXl7XkxoSG64fRk4kLmwsy3mkt1KGUpsZunCWBp'
// var secret= 'fb4tKOw40Veks4aKEFdaZ5yQPl5SgwfxzsFDemc2'

// fetch('https://api.petfinder.com/v2/oauth2/token', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     body: `grant_type=client_credentials&client_id=${ID}&client_secret=${secret}`    
// });

// fetch("https://api.petfinder.com/v2/{CATEGORY}/{ACTION}?{parameter_1}={value_1}&{parameter_2}={value_2}", {
//   headers: {
//     Authorization: "Bearer {YOUR_ACCESS_TOKEN}"
//   }
// })


// Create add event listeners for adopting cat or dog
$('#catbutton').on("click", function(e) {
    console.log('I choose cats!')
    chooseCat();
});
// Choosing a cat will display all cats
function chooseCat(){
    window.location.href = "./index.html"
}

// Choosing a dog will display all dogs
$('#dogbutton').on("click", function(e) { 
    console.log('I choose dogs!')
    chooseDog();
});

function chooseDog(){ 
    window.location.href = "./index.html"
}

// optional: browse both cats and dogs
$('#petbutton').on("click", function(e) { 
    console.log('Surprise me!')
    choosepet();
});

function choosePet(){ 
    window.location.href = "./index.html"
}

// create search bar to add location

//Pseudo Code for browsing pets apage
// This page includes a location bar at top and how many miles within current location

// Filter options to sort distance from nearest to farthest

// Additional filters to include age, breed, color, size, gender, coat, etc

// When browsing, each profile will display a picture of the pet and include basic information such as age, name, breed, and distance.

// Each profile will have option to favorite a pet





