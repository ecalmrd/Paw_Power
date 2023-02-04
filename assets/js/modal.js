


document.getElementById("location").style.display = 'none'

var animal;


// Choosing a cat
$('#catbutton').on("click", function (e) {  
  document.getElementById("location").style.display = 'block';
  animal = 'cat';
  document.getElementById("type").innerHTML = animal  
  console.log('I choose ' + animal)  
  chooseCat();
});

// Choosing a dog
$('#dogbutton').on("click", function (e) { 
  document.getElementById("location").style.display = 'block';
  animal = 'dog';
  document.getElementById("type").innerHTML = animal
  console.log('I choose ' + animal)  
});

// Choosing a pet
$('#petbutton').on("click", function (e) {
  document.getElementById("location").style.display = 'block';
  document.getElementById("type").innerHTML = animal
  animal = 'pet';
  console.log('Surprise me! ' + animal)
});


// PetFinder Api
var ID = 'EmpbeFp7f6MKXl7XkxoSG64fRk4kLmwsy3mkt1KGUpsZunCWBp'
var secret = 'fb4tKOw40Veks4aKEFdaZ5yQPl5SgwfxzsFDemc2'
var token;

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
          console.log(response.animals);
          console.log(response.animals[0].name);

      })
  })
}






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
  let location = document.getElementById("coordinates").value;
  let range = document.getElementById("miles").value; 
  let  
  scooby();
  
})

//scooby snack
function scooby(){
let $items = $('#type, #coordinates, #miles')
var obj = {}
$items.each(function() {
  obj[this.id] = $(this).val()
})

console.log (JSON.stringify(obj, null, ' '))
}

  

