console.log("Hello from pets.js!");

// ===== DOM Elements =====
const addPetBtn = document.getElementById("addPetBtn");
const petsContainer = document.getElementById("petsContainer");

// ===== Render Function =====
function renderPets() {
  let petsHTML = "";

  state.pets.forEach((pet) => {
    const petHTML = pet.html();
    petsHTML += petHTML;
  });

  petsContainer.innerHTML = petsHTML;
}

// ===== Event Listener =====
addPetBtn.addEventListener("click", function () {
  console.log("Button clicked!");

  const petName = document.getElementById("petName").value;
  const petAge = document.getElementById("petAge").value;
  const petSpecies = document.getElementById("petSpecies").value;

  console.log("Form data:", petName, petAge, petSpecies);

  const newPet = createPet(petName, Number(petAge), petSpecies);
  state.pets.push(newPet);

  console.table(state.pets);

  // Save pets to localStorage
  savePets();

  // Render updated pets
  renderPets();
});

// ===== Initial Render =====
renderPets();
