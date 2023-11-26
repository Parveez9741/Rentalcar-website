function showSection(sectionId) {
  
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
      section.style.display = 'none';
  });

  
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
      selectedSection.style.display = 'block';
  }
}


const cars = [
  { id: 1, name: 'creta', price: '$50/day' },
  { id: 2, name: 'innova', price: '$70/day' },
  { id: 3, name: 'swift', price: '$25/day' },
];


const carList = document.getElementById('carList');
cars.forEach(car => {
  const listItem = document.createElement('li');
  listItem.textContent = `${car.name} - ${car.price}`;
  carList.appendChild(listItem);
});

function populateCarList() {
  const carList = document.getElementById('carList');
  carsWithImages.forEach(car => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
          <div class="car-item">
              <img src="${car.image}" alt="${car.name}">
              <h3>${car.name}</h3>
              <p>${car.price}</p>
          </div>`;
      carList.appendChild(listItem);
  });
}


document.addEventListener('DOMContentLoaded', function() {
  populateCarList();
});

function toggleMenu() {
  var menu = document.querySelector('.mobile-menu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function scrollToSection(sectionId) {
  var sections = document.querySelectorAll('.content-section');
  sections.forEach(function(section) {
      section.style.display = 'none';
  });

  document.getElementById(sectionId).style.display = 'block';
  toggleMenu(); 
}
function rentNow(carModel){
  alert('Rent Now Clicked for '+ carModel);
}