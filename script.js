// ===== Proof of life 1 =====
console.log("hello world — script connected!");

// ===== Step 1: Global state object =====
const state = {};
console.log("Initial state:");
console.table(state); // should be empty

// ===== Step 2: Grab the button and set up listener =====
const button = document.getElementById("saveBtn");

button.addEventListener("click", saveForm);

function saveForm() {
  // ===== Proof of life 2 =====
  console.log("button clicked!");

  // ===== Step 3: Capture form data =====
  const name = document.getElementById("name").value;
  console.log("Name:", name); // proof of life 1

  const email = document.getElementById("email").value;
  console.log("Email:", email);

  const phone = document.getElementById("phone").value;
  console.log("Phone:", phone);

  const city = document.getElementById("city").value;
  console.log("City:", city);

  const zip = document.getElementById("zip").value;
  console.log("Zip:", zip);

  const petName = document.getElementById("petName").value;
  console.log("Pet Name:", petName);

  const petType = document.getElementById("petType").value;
  console.log("Pet Type:", petType);

  // ===== Step 4: Save data into state object =====
  state.name = name;
  state.email = email;
  state.phone = phone;
  state.city = city;
  state.zip = zip;
  state.petName = petName;
  state.petType = petType;

  // ===== Step 5: Log final state =====
  console.log("Updated state:");
  console.table(state);

  // ===== Proof of life 2 =====
  // Set breakpoint here to inspect "state" in DevTools
}

// ===== Bonus Task: Factory Function =====
function petOwnerFactory(name, email, phone, city, zip, petName, petType) {
  return {
    name,
    email,
    phone,
    city,
    zip,
    petName,
    petType,
    status() {
      console.log(
        `Owner: ${name} (${email}, ${phone}) from ${city}, ${zip}. Pet: ${petName} the ${petType}.`
      );
    },
  };
}
