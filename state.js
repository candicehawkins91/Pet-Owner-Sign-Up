// ===== Proof of Life =====
console.log("Hello from state.js!");

// ===== Global State Object =====
const state = {
  name: "",
  email: "",
  zipcode: "",
  pets: [],
};

// ===== Load Data from localStorage =====
function loadState() {
  state.name = localStorage.getItem("name") || "";
  state.email = localStorage.getItem("email") || "";
  state.zipcode = localStorage.getItem("zipcode") || "";

  console.log("Loaded from localStorage:", state);
}

// ===== Save Form Data to localStorage =====
function saveFormData() {
  localStorage.setItem("name", state.name);
  localStorage.setItem("email", state.email);
  localStorage.setItem("zipcode", state.zipcode);

  console.log("Saved form data to localStorage!");
}

// ===== Pet Serialization =====
function serializePet(pet) {
  return {
    name: pet.name,
    age: pet.age,
    species: pet.species,
  };
}

// ===== Save Pets to localStorage =====
function savePets() {
  const serializedPets = state.pets.map(serializePet);
  localStorage.setItem("pets", JSON.stringify(serializedPets));
  console.log("Saved pets to localStorage:", serializedPets);
}

// ===== Load Pets from localStorage =====
function loadPets() {
  const petString = localStorage.getItem("pets");
  const savedPets = JSON.parse(petString) || [];
  state.pets = [];

  for (let i = 0; i < savedPets.length; i++) {
    const petData = savedPets[i];
    // Rehydrate (recreate) each pet using createPet()
    const realPet = createPet(petData.name, petData.age, petData.species);
    state.pets.push(realPet);
  }

  console.log("Loaded pets from localStorage:", state.pets);
}

// ===== Initial Load =====
loadState();
loadPets();
