/*const person = {
    name: "Maria",
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
    };
        
person.greet();*/

const person = {
    name: "Maria",
    greet: () => {
      console.log(`Hello, my name is ${this.name}`); // Arrow function does not bind 'this' to the object
    }
  };
  
  person.greet();

//const greetFunction = person.greet; // Extracting the method
//greetFunction(); // Calling the method

const greetFunction = person.greet.bind(person); // Binding 'this' to person:
greetFunction();

const button = document.querySelector("button");
button.addEventListener("click", function () { // this = button or the first variable refer
  console.log(this); // 'this' refers to the button element
});

class House {
    constructor(color) {
      this.color = color;
    }
    getFurniture() {
      return 'sofa';
    }
  }

const houseObject = new House('red');
const houseObject2 = new House('blue');
console.log(houseObject2.getFurniture());