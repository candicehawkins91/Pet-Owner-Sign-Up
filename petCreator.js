// ===== Proof of Life =====
console.log("Hello from petCreator.js!");

// ===== Factory Function =====
function createPet(name, age, species) {
  return {
    name,
    age,
    species,
    energy: 50,
    happiness: 50,

    // Method: show status
    status() {
      console.log(
        `${this.name} the ${this.species} is ${this.age} years old. Energy: ${this.energy}, Happiness: ${this.happiness}`
      );
    },

    // Method: feed pet
    feed() {
      this.energy += 10;
      console.log(`${this.name} has been fed! Energy: ${this.energy}`);
    },

    // Method: play with pet
    play() {
      if (this.energy > 10) {
        this.happiness += 10;
        this.energy -= 10;
        console.log(
          `${this.name} played! Happiness: ${this.happiness}, Energy: ${this.energy}`
        );
      } else {
        console.log(`${this.name} is too tired to play.`);
      }
    },
  };
}
