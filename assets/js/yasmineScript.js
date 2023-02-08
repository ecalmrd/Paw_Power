//start code for image slider// 

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex = n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item-slide");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
}
// end code for image slider//



// start code for button//

  const cards = document.querySelectorAll(".card");
  let currentIndex = 0;

  function showSlide(n) {
    cards[currentIndex].classList.remove("active");
    currentIndex = (n + cards.length) % cards.length;
    cards[currentIndex].classList.add("active");
  }

 document.querySelector("#next").addEventListener("click", function() {
    showSlide(currentIndex + 1);
  });
//end code for button//

var ID = 'EmpbeFp7f6MKXl7XkxoSG64fRk4kLmwsy3mkt1KGUpsZunCWBp'
var secret = 'fb4tKOw40Veks4aKEFdaZ5yQPl5SgwfxzsFDemc2'
var token;

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
          profileSliders(data)

          for(var i=0; i< data.animals.length;i++) {
          var cardTemplate=`
            <div class="card">
            <div class="card-image">
                <figure class="image is-16by9 is-covered">
                <img src="${data.animals[i].photos[0].medium}" alt="Animal Image">
                
                </figure>
            </div>
           
            <div class="card-content slider-text ">
                <div class="is-size-5 box">
                name: ${ data.animals[i].name }
               description: ${ data.animals[i].description}

                    <div class="slider-buttons">
                      <button class="button is-primary" id="next">Next</button>
                      </div>

                </div>
            </div>
        </div>
            `
            document.querySelector("#slider").innerHTML+=cardTemplate
          }
         
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


//code for adding profiles to image slide


var sliderProfileEl1= $('#sliderprofile1');
var sliderProfileEl2= $('#sliderprofile2');;
var sliderProfileEl3= $('#sliderprofile3');


function profileSliders(data) {
for (var i=0; i < data.animals[2];i++) {
sliderProfileEl1.attr('src', data.animals[i=0].photos[0].small);
sliderProfileEl2.attr('src', data.animals[i=1].photos[0].small);
sliderProfileEl3.attr('src', data.animals[i=2].photos[0].small);
console.log(data.animals[0].photos[0].small)

}
};
