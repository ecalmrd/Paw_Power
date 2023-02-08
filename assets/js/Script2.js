//petfinder API variables
var animalAPI = "https://api.petfinder.com/v2/animals?type=";
var organizationAPI = "https://api.petfinder.com/v2/organizations?name=";
var petIDAPI = "https://api.petfinder.com/v2/animals/{id}";
var ID = 'nCBkcBAElKdOOTOkSDQkboV9uAF2e1t3vxszPAsoJP0wehxCK5'
var secret = 'v4wMb5hrxiYYsippsyz7nIL2UqmVsZfDSXpkdiX3'
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




var petPics1 = $('#petPics1');
var petNameEl1 = $('#petname1');
var breedEl1 = $('#breed1');
var ageEl1 = $('#age1');
var genderEl1 = $('#gender1');

















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




                    breedEl1.text(data.animals[1].breeds.primary)
                    ageEl1.text(data.animals[1].age)
                    genderEl1.text(data.animals[1].gender)
                    petNameEl1.text(data.animals[1].name)














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
        petPics1.attr('src', data.animals[1].photos[0].full);
        console.log(data.animals[0].photos[0].full)
    }
}




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

