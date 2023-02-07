//START FOR THE IMAGE CAROUSEL CODE
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// END OF CODE FOR THE IMAGE CAROUSEL'


var fetchData = () => {
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
      //change query parameters here
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
              typeEl.text(data.animals[0].species)
              breedEl.text(data.animals[0].breeds.primary)
              ageEl.text(data.animals[0].age)
              genderEl.text(data.animals[0].gender)
              colorEl.text(data.animals[0].colors.primary)
              locationEl.text(data.animals[0].distance)
              petNameEl.text(data.animals[0].name)
              story.text(data.animals[0].description)
              replacePlaceholder(data)
              colorGender(data)
          });
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
      });
  });
  };
  fetchData();

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

    function scooby(){
      let $items = $('#type, #coordinates, #miles')
      var obj = {}
      $items.each(function() {
        obj[this.id] = $(this).val()
      })
      localStorage.setItem('find',JSON.stringify(obj))
      console.log (JSON.stringify(obj, null, ' '))
      }