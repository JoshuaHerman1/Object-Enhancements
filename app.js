//q1
function createInstructor(firstName, lastName){
  return {
    firstName,
    lastName
  }
}

//q2
let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}

//q3
const instructor = {
  firstName: "Colt",
  sayHi(){
    return "Hi!";
  },
  sayBye(){
    return this.firstName + " says bye!";
  }
}

//q4
function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}