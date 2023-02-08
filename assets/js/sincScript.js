


document.getElementById("location").style.display = 'none'
document.getElementById("loading-bg").style.display = 'none'

var animal;
var type;


// PetFinder Api
var ID = 'ZIryHn5E8xyhG6vho1rYGCV4W2tB55s4FihvxbhGmXGvSDer4N'
var secret = 'ZEKvuaftgTQ2Niug84aBdxp97YzvpjaUnmOAXTm0'
var token;


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
    fetch(`https://api.petfinder.com/v2/animals?`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {
      return response.json()
    }).then((response) => {
      console.log(response.animals);
      console.log(response.animals[0].name);      


    })
  })
}

choosePet();

// $('#API-call').on("click", function (e) {
//   console.log('Surprise me!')  
//   choosePet();

// });




// Choosing a cat
$('#catbutton').on("click", function (e) {
  document.getElementById("location").style.display = 'block';
  animal = 'cat';
  document.getElementById("type").innerHTML = animal
  localStorage.clear('preference')
  localStorage.setItem('preference', animal)
});

// Choosing a dog
$('#dogbutton').on("click", function (e) {
  document.getElementById("location").style.display = 'block';
  animal = 'dog';
  document.getElementById("type").innerHTML = animal
  localStorage.clear('preference')
  localStorage.setItem('preference', animal)
});

// Choosing a pet
$('#petbutton').on("click", function (e) {
  document.getElementById("location").style.display = 'block';
  document.getElementById("type").innerHTML = animal
  animal = 'pet';
  localStorage.clear('preference')
  localStorage.setItem('preference', animal)
});




//modal code

document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});


//location search

$('#search').on("click", function (e) {
  let destination = document.getElementById("location").value;
  // if (destination == null || destination ==''){
  //   alert("Please enter a city.")
  //   return false;
  // }  
  let range = document.getElementById("distance").value;
  localStorage.clear('preference')
  localStorage.setItem('preference', animal)
  document.getElementById("type").value = animal
  scooby();
  document.getElementById("boop-bg").style.display = 'none'
  document.getElementById("loading-bg").style.display = 'block'
  fillProgress();
  


})



//scooby snack
function scooby() {
  let $items = $('#type, #location, #distance')
  var obj = {}
  $items.each(function () {
    obj[this.id] = $(this).val()
  })
  localStorage.setItem('find', JSON.stringify(obj))
  console.log(JSON.stringify(obj, null, ' '))
}

var progressArr = [1, 2, 3, 4, 5, 10, 15, 30, 60, 90, 100];
function fillProgress() {

  progressArr.forEach(function (num, index) {

    setTimeout(function () {

      $('#waitroom').val(num);
      if ($('#waitroom').val() == 100) {        
        if (animal == 'cat'){
        window.location.replace("cat.html");
      }
        else if (animal == 'dog'){
        window.location.replace("dog.html");
      }
        else{
          window.location.replace("pet.html")
        }
      }

    }, 250 * index);

  });

}

function initMap(){
console.log('Google Places API loaded.')
}





//Carousel Code

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item-slide");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// start code for button

// const cards = document.querySelectorAll(".card");
// let currentIndex = 0;

// function showSlide(n) {
//   cards[currentIndex].classList.remove("active");
//   currentIndex = (n + cards.length) % cards.length;
//   cards[currentIndex].classList.add("active");
// }

// let progressSlideEl = document.querySelector(".slider-navigation-next");
// progressSlideEl.addEventListener("click", function () {
//   showSlide(currentIndex + 1);
// });
// // end code for button

// var ID = 'EmpbeFp7f6MKXl7XkxoSG64fRk4kLmwsy3mkt1KGUpsZunCWBp'
// var secret = 'fb4tKOw40Veks4aKEFdaZ5yQPl5SgwfxzsFDemc2'
// var token;

// var fetchData = () => {
//   fetch('https://api.petfinder.com/v2/oauth2/token', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     body: `grant_type=client_credentials&client_id=${ID}&client_secret=${secret}`
//   })
//     .then((response) => {
//       return response.json()
//     })
//     .then((response) => {
//       // console.log(response)
//       token = response.access_token
//       // console.log(token)
//       //change query parameters here
//       fetch('https://api.petfinder.com/v2/animals?type=', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       })
//         .then((response) => {
//           return response.json()
//         })
//         .then((data) => {

//           console.log(data.animals)
//           for (var i = 0; i < data.animals.length; i++) {
//             var cardTemplate = `
//           <div class="card">
//           <div class="card-image">
//               <figure class="image is-16by9 is-covered">
//               <img src="${data.animals[i].photos[0].medium}" alt="Animal Image">
              
//               </figure>
//           </div>
         
//           <div class="card-content slider-text ">
//               <div class="is-size-5 box">
//               name: ${data.animals[i].name}
//              description: ${data.animals[i].description}

//                   <div class="slider-buttons">
//                     <button class="button is-primary" id="next">Next</button>
//                     </div>

//               </div>
//           </div>      
//           `
//             document.querySelector("#slider").innerHTML = $('cardTemplate')
//             console.log(cardTemplate)
//           }

//         });
//       fetch('https://api.petfinder.com/v2/organizations', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       })
//         .then((response) => {
//           return response.json()
//         })
//         .then((data) => {
//           console.log(data.organizations)
//         });
//     });
// };
// fetchData();

//carousel




//end 

