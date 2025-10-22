// ===== Proof of Life =====
console.log("Hello from pets.js!");

// ===== Global State =====
const state = {
  pets: [],
};

// ===== Quick Proof of Life =====
const hello = createPet("Hello", 2, "Dog");
hello.status();
console.log("HTML for Hello:", hello.html()); // Proof of life for HTML

// ===== DOM Elements =====
const addPetBtn = document.getElementById("addPetBtn");
const petsContainer = document.getElementById("petsContainer");

// ===== Render Function =====
function renderPets() {
  let petsHTML = "";

  // Loop through all pets and add their HTML
  state.pets.forEach((pet) => {
    const petHTML = pet.html();

    // Proof of life: log each pet's HTML
    console.log("Pet HTML:", petHTML);

    petsHTML += petHTML;
  });

  // Proof of life: full HTML string
  console.log("All Pets HTML:", petsHTML);

  // Update the page
  petsContainer.innerHTML = petsHTML;
}

// ===== Event Listener =====
addPetBtn.addEventListener("click", function () {
  console.log("Button clicked!");

  const petName = document.getElementById("petName").value;
  const petAge = document.getElementById("petAge").value;
  const petSpecies = document.getElementById("petSpecies").value;

  // Proof of life: confirm form values
  console.log("Form data:", petName, petAge, petSpecies);

  // Create a new pet
  const newPet = createPet(petName, Number(petAge), petSpecies);

  // Add to global state
  state.pets.push(newPet);

  // Proof of life: status + console.table
  newPet.status();
  console.table(state.pets);

  // Render pets on the page
  renderPets();
});
