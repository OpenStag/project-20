const activePage = window.location.pathname.split("/").pop(); 
//console.log(activePage);

document.querySelectorAll('.navbar-menu a').forEach(link => {
  const linkPage = link.getAttribute("href");
  if (linkPage === activePage) {
    link.classList.add("active");
  }
});


const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});



const pets = [
  { name: "Buddy", age: "2 Years", image: "assest/buddy.jpg" },
  { name: "Luna", age: "6 Years", image: "assest/luna.jpg" },
  { name: "Max", age: "4 Years", image: "assest/max.jpg" },
  { name: "Daisy", age: "5 Years", image: "assest/daisy.jpg" },
  { name: "Shadow", age: "2 Years", image: "assest/shadow.jpg" },
  { name: "Rocky", age: "4 Years", image: "assest/rocky.png" },
  { name: "Shaggy", age: "10 Months", image: "assest/shaggy.jpg" },
  { name: "Bella", age: "8 Years", image: "assest/bella.jpg" },
];

const container = document.getElementById("pet-container");


pets.forEach(pet => {

  const card = document.createElement("div");
  card.classList.add("pet-card");

  card.innerHTML = `

    <img src="${pet.image}" alt="${pet.name}" class="pet-card-img">
    <div class="pet-card-body">
      <h3 class="pet-card-name">${pet.name}</h3>
      <p class="pet-card-age">${pet.age}</p>
      <button class="pet-card-btn">View Profile</button>
    </div>

  `;

  container.appendChild(card);
});
