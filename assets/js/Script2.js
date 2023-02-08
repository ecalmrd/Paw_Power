//petfinder API variables
var animalAPI = "https://api.petfinder.com/v2/animals?type=";
var organizationAPI = "https://api.petfinder.com/v2/organizations?name=";
var petIDAPI = "https://api.petfinder.com/v2/animals/{id}";
var ID = 'nCBkcBAElKdOOTOkSDQkboV9uAF2e1t3vxszPAsoJP0wehxCK5'
var secret = 'v4wMb5hrxiYYsippsyz7nIL2UqmVsZfDSXpkdiX3'
var token;

// variables to DOM maniplate and add pet details to HTML
//  0  //
var petPics = $('#petPics');
var petNameEl = $('#petname');
var breedEl = $('#breed');
var ageEl = $('#age');
var genderEl = $('#gender');
//  0  //
//  1  //
var petPics1 = $('#petPics1');
var petNameEl1 = $('#petname1');
var breedEl1 = $('#breed1');
var ageEl1 = $('#age1');
var genderEl1 = $('#gender1');
//  1  //
//  2  //
var petPics2 = $('#petPics2');
var petNameEl2 = $('#petname2');
var breedEl2 = $('#breed2');
var ageEl2 = $('#age2');
var genderEl2 = $('#gender2');
//  2  //
//  3  //
var petPics3 = $('#petPics3');
var petNameEl3 = $('#petname3');
var breedEl3 = $('#breed3');
var ageEl3 = $('#age3');
var genderEl3 = $('#gender3');
//  3  //
//  4  //
var petPics4 = $('#petPics4');
var petNameEl4 = $('#petname4');
var breedEl4 = $('#breed4');
var ageEl4 = $('#age4');
var genderEl4 = $('#gender4');
//  4  //
//  5  //
var petPics5 = $('#petPics5');
var petNameEl5 = $('#petname5');
var breedEl5 = $('#breed5');
var ageEl5 = $('#age5');
var genderEl5 = $('#gender5');
//  5  //
//  6  //
var petPics6 = $('#petPics6');
var petNameEl6 = $('#petname6');
var breedEl6 = $('#breed6');
var ageEl6 = $('#age6');
var genderEl6 = $('#gender6');
//  6  //
//  7  //
var petPics7 = $('#petPics7');
var petNameEl7 = $('#petname7');
var breedEl7 = $('#breed7');
var ageEl7 = $('#age7');
var genderEl7 = $('#gender7');
//  7  //
//  8  //
var petPics8 = $('#petPics8');
var petNameEl8 = $('#petname8');
var breedEl8 = $('#breed8');
var ageEl8 = $('#age8');
var genderEl8 = $('#gender8');
//  8  //













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


                    //  0  //
                    breedEl.text(data.animals[0].breeds.primary)
                    ageEl.text(data.animals[0].age)
                    genderEl.text(data.animals[0].gender)
                    petNameEl.text(data.animals[0].name)
                    //  1  //
                    breedEl1.text(data.animals[1].breeds.primary)
                    ageEl1.text(data.animals[1].age)
                    genderEl1.text(data.animals[1].gender)
                    petNameEl1.text(data.animals[1].name)
                    //  2  //
                    breedEl2.text(data.animals[2].breeds.primary)
                    ageEl2.text(data.animals[2].age)
                    genderEl2.text(data.animals[2].gender)
                    petNameEl2.text(data.animals[2].name)
                    //  3  //
                    breedEl3.text(data.animals[3].breeds.primary)
                    ageEl3.text(data.animals[3].age)
                    genderEl3.text(data.animals[3].gender)
                    petNameEl3.text(data.animals[3].name)
                    //  4  //
                    breedEl4.text(data.animals[4].breeds.primary)
                    ageEl4.text(data.animals[4].age)
                    genderEl4.text(data.animals[4].gender)
                    petNameEl4.text(data.animals[4].name)
                    //  5  //
                    breedEl5.text(data.animals[5].breeds.primary)
                    ageEl5.text(data.animals[5].age)
                    genderEl5.text(data.animals[5].gender)
                    petNameEl5.text(data.animals[5].name)
                    //  6  //
                    breedEl6.text(data.animals[6].breeds.primary)
                    ageEl6.text(data.animals[6].age)
                    genderEl6.text(data.animals[6].gender)
                    petNameEl6.text(data.animals[6].name)
                    //  7  //
                    breedEl7.text(data.animals[7].breeds.primary)
                    ageEl7.text(data.animals[7].age)
                    genderEl7.text(data.animals[7].gender)
                    petNameEl7.text(data.animals[7].name)
                    //  8  //
                    breedEl8.text(data.animals[8].breeds.primary)
                    ageEl8.text(data.animals[8].age)
                    genderEl8.text(data.animals[8].gender)
                    petNameEl8.text(data.animals[8].name)





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
    if (data.animals[1].photos[0].full) {
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

