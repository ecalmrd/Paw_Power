// Pseudo Code for Home Page
// Create add event listeners for adopting cat or dog
$('#catbutton').on("click", function(e) {
    console.log('I choose cats!')
    // chooseCat();
});
// Choosing a cat will display all cats
function chooseCat(){
    window.location.href = "./index.html"
}

// Choosing a dog will display all dogs
$('#dogbutton').on("click", function(e) { 
    console.log('I choose dogs!')
    // chooseDog();
});

function chooseDog(){ 
    window.location.href = "./index.html"
}

// optional: browse both cats and dogs
$('#petbutton').on("click", function(e) { 
    console.log('Surprise me!')
    // choosepet();
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





