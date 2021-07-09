// let arr = [1, 2, 3, 2, 3, 3];
// console.log(arr.__proto__);

// class PP {
//   constructor(fn) {
//     this.firstName = fn;
//   }

//   set fullName(name) {
//     if (name.includes("j")) {
//       this.firstName = name;
//     }
//   }
//   static secret() {
//     console.log("shhhhhhhh");
//   }
// }
// const j = new PP("joshua");
// j.fullName = "joh";
// console.log(j);

// PP.prototype._name = function () {
//   console.log(this.firstName);
// };
// console.log(PP.prototype.isPrototypeOf(j));
// j._name();
// console.dir(PP.prototype.constructor);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// //1.Classes are NOT hoisted
// //2.Classes are first class citizines we can pass them to functions and return them from functions
// //3.Classes are executed in strict mode meaning if we need have a instances all the code will be executed no matter what

// const account = {
//   owner: "jonas",
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// account.latest = 50;
// console.log(account.movements);

// //Static methods
// //they are methods defined inside classes and not available for instances or they are defined in any constructor function
// // Array.from();
// //it will only be available inside the constructor function

// //How to add static method to a literal object?

// //we Cant call the function that is in the constructor function in instances its only available to the constructor fuction

// //to create static method is a class we need to add static and then function name
// arr.__proto__.sort((a, b) => b - a);
// console.log(arr);

// //Object.create
// //when creating there are no prototype propertys,constructor function and new operator
// /**we use this so we can link any objects prototypes to the object we are creating*/

// const PersonProto = {
//   secrets() {
//     console.log(2040 - this.birthYear);
//   },
//   init(fn, by) {
//     this.fn = fn;
//     this.birthYear = by;
//   },
// };
// const steve = Object.create(PersonProto);

// console.log(steve);
// //adding propertys
// steve.name = "Steven";
// steve.birthYear = 2003;
// steve.secrets();

// const mary = Object.create(PersonProto);
// //theres a better way of creating properties
// mary.init("mary", 1993);
// mary.secrets();

// console.dir(steve);
// console.dir(PP);

// //!!inheritance between constructor functions
// /*
// ONLY works for constructor functions

// instead of copying methods or properties from other constructor function we can use the call the method on the constructor function to set the this keyword

// When we call the Fn constructor function inside the student constructor function all of the instances of student are still the prototype property of Student if we want to change it to fn we need to do it manually we use Object.create

// Fn.prototype = Object.create(Fn.prototype);
// we are creating a connection
// now we have Student constructor fuction inheriting the fn prototype
// */
// const Fn = function (fn) {
//   this.fn = fn;
// };
// Fn.prototype.whtMyName = function () {
//   console.log(`${this.fn} is awesome`);
// };
// const Student = function (first, course) {
//   Fn.call(this, first);
//   this.course = course;
// };
// Student.prototype = Object.create(Fn.prototype);
// Student.prototype.introduce = function () {
//   console.log(`my name is ${this.fn} and i study ${this.course}`);
// };
// const mike = new Student("Mike", "CS");
// console.log(mike);
// mike.whtMyName();

// //inheriting between classes/ ES6 classes
// //we need the extend word and the super function
// //extends link the prototypes as well
// class HI extends PP {
//   //this will recieve arguments from the parent class and additional ones
//   constructor(fn, by) {
//     //super Always needs to happen first because super is responsible for creating the this keyword in this child class
//     //super is the constructor funciton of the parent class
//     super(fn);

//     this.bDay = by;
//   }
// }
// const superInstace = new HI("josh", 2003);
// console.log(superInstace);
// console.dir(HI);

// //adding a protype in the middle of the chain
// const _PersonProto = {
//   secrets() {
//     console.log(2040 - this.birthYear);
//   },
//   init(fn, by) {
//     this.fn = fn;
//     this.birthYear = by;
//   },
// };

// const josh = Object.create(_PersonProto);
// //studentProto has a prototype of the PersonProto
// const studentProto = Object.create(_PersonProto);
// //PersonProto is the Grandparent of jay
// //jay has a prototype of the studentProto

// //adding a init method on studentProto

// studentProto.init = function (fn, by, course) {
//   _PersonProto.init.call(this, fn, by);
//   this.course = course;
// };
// const jay = Object.create(studentProto);
// jay.init("jay", 2010, "CS");
// console.dir(studentProto);

// //what is proto and prototype property

// //Encapsulation DATA privacy
// //keeping  methods or properties private so they are not accessible outside of the class
// //the rest of the methods are exposed like a API
// //we do this so we dont acicdentally manipulate data inside of a class from outside code
// //js doesnt have real encapsulation but we can get pass it we need to add a underscore at the begging of the property
// //it doesnt make the property truly private it is onlt a convention
// //a way to access private data is to create a function and return that property this prevents to over write the private property
// // class Account extends PP {
// //   constructor(fn) {
// //     super(fn);
// //     this._movements = ["private"];
// //   }
// //   get movs() {
// //     return this._movements;
// //   }
// // }
// // const acc = new Account("josh");
// // console.log(acc.movs);

// //class fields
// //!!this is not part of the js language yet only google chrome supports this class fields
// //js is moving away that classes are synthetic sugar of constructor functions meaning nicer syntax for constructor function
// //!!field is another name for property
// //4 different kinds of field and methods
// //public fields
// //private fields
// //public methods
// //private  methods
// class Account extends PP {
//   //fields CANNOT be defined inside the constrcutor

//   //!!fields will only be available for the instances NOT prototype
//   ///??writing public fields works if the property has a default value
//   public = "PUBLIC";
//   //??private fields
//   //making properties private only accesible inside of the class
//   #movements = ["private"];
//   //we dont have to give a defualt value all we do is declare it and inside the constructor function we reasign it
//   #ln;

//   constructor(fn, ln) {
//     super(fn);
//     this.#ln = ln;
//   }
//   get movs() {
//     return this.#movements;
//   }
//   //??public methods are the same
//   //??private methods hiding implementation details from the outside no browser supports it yet
//   #privateMethod() {
//     return true;
//   }
// }
// const acc = new Account("josh", "ruby");
// console.log(acc);

// class Ev {
//   #battery;

//   constructor(make, speed, battery) {
//     this.make = make;
//     this.speed = speed;
//     this.#battery = battery;
//   }

//   charge = function (chargeTo) {
//     this.currentBattery = chargeTo;
//     return this;
//   };
//   acc = function () {
//     this.speed += 20;
//     this.#battery -= 1;

//     console.log(
//       `${this.make} is going at ${this.speed} h with a charge of ${
//         this.#battery
//       }%`
//     );
//     return this;
//   };
// }
// class Car extends Ev {
//   constructor(make, speed, battery) {
//     super(make, speed, battery);
//   }

//   slow = function () {
//     this.speed -= 5;
//     return this;
//   };
// }
// const car = new Car("Tesla", 120, 90);
// car.acc().acc().acc().slow();
// car.charge(100);
// car.constructor = Car;
// console.log(car);

// function doSetTimeout(i) {
//   setTimeout(function () {
//     alert(i);
//   }, 100);
// }

// /**
//  * Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Input: nums = [2,3,0,1,4]
// //1,2
// Output: 2
// Explanation: You start at 2 (index 0), jump once to 3 (index 1), then jump 3 to the last element 4 (index 4)

// get the potential jumps values for one jump or two jumps select the highest possible jump
// ex
// [2,3,0,1,4]

// look at the possible jumps for the first number by adding the index
// [2,3,3,1,4]

// 2
// index 0
// 0 + 1 = 1
// 0 + 2 = 2
// look at the the values and jump to the greatest
// values would be
// 3 or 1
// 1 + 1
// 1 + 2
// 1 + 3

// 1 + 1 = 2
// 1 + 2 = 3
// */
// const minJumps = function (...arr) {
//   let counter = 1;
//   let vals = [];
//   arr.forEach((val, i, arr) => {
//     let tempVal = [];
//     let tempI = [];
//     if (i != arr.length) {
//       if (val != arr[arr.length - 1]) {
//         counter++;
//       }
//     }
//   });
// };
// minJumps(...[2, 3, 0, 1, 4]);
let navbar = document.querySelector(".nav-active");
let gradient = document.querySelector(".content-box");
let navbarToggle = true;
const hamone = document.querySelector(".ham-1");
document.querySelector(".ham").addEventListener("click", function (e) {
  if (navbarToggle) {
    navbarToggle = false;
    navbar.classList.remove("none");
    gradient.classList.add("none");
    hamone.classList.add("open");
    navbar.style.left = "0%";
  } else {
    navbarToggle = true;
    navbar.classList.add("none");
    gradient.classList.remove("none");
    hamone.classList.remove("open");
    navbar.style.left = "-100%";
  }
  console.log(navbarToggle);
});

class Testimonial {
  constructor(img, quote, name) {
    (this.img = img), (this.quote = quote), (this.name = name);
  }
}
let back = document.querySelector(".back");
let next = document.querySelector(".next");
let page = 0;

const perla = new Testimonial(
  "perl.img",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa cumque sequi eligendi labore dolorum facere rem enim minus eaque, optio adipisci. Repellat consequuntur unde sequi tenetur facere voluptates quae eaque veniam repellendus odio vitae excepturi maxime praesentium tempora quidem porro incidunt vero quod molestias ut, nobis atque fugit laboriosam recusandae.",
  "Cristian Perla"
);
console.log(perla);
const saul = new Testimonial(
  "perl.img",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa cumque sequi eligendi labore dolorum facere rem enim minus eaque, optio adipisci. Repellat consequuntur unde sequi tenetur facere voluptates quae eaque veniam repellendus odio vitae excepturi maxime praesentium tempora quidem porro incidunt vero quod molestias ut, nobis atque fugit laboriosam recusandae.",
  "Saul Ruvalcaba"
);
const lalo = new Testimonial(
  "lalo.img",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa cumque sequi eligendi labore dolorum facere rem enim minus eaque, optio adipisci. Repellat consequuntur unde sequi tenetur facere voluptates quae eaque veniam repellendus odio vitae excepturi maxime praesentium tempora quidem porro incidunt vero quod molestias ut, nobis atque fugit laboriosam recusandae.",
  "Eduardo Castro"
);
let testismonials = [perla, saul, lalo];
const contentParent = document.querySelector(".testi-con__content");
const clearstate = () => {
  contentParent.querySelector(".testi-con__content__name").style.opacity = "0";
  contentParent.querySelector(".testi-con__content__para").style.opacity = "0";

  while (contentParent.firstChild) {
    contentParent.removeChild(contentParent.firstChild);
  }
};
let nextSwicth = false;
next.addEventListener("click", (e) => {
  page++;

  if (page == testismonials.length - 1) {
    next.style.display = "none";
    nextSwicth = true;
  }
  if (page !== 0) {
    back.style.display = "flex";
  }
  if (page == testismonials.length) return;
  console.log(page);

  clearstate();
  let name = document.createElement("p");
  let para = document.createElement("p");
  para.className = "testi-con__content__para";
  name.className = "testi-con__content__name";
  name.textContent = testismonials[page].name;
  para.textContent = testismonials[page].quote;
  console.log("hi");
  contentParent.appendChild(para);
  contentParent.appendChild(name);

  setTimeout(() => {
    name.style.opacity = "100";
    para.style.opacity = "100";
  }, 200);
});
back.addEventListener("click", (e) => {
  page--;
  console.log(page);

  if (nextSwicth) {
    next.style.display = "flex";
  }
  if (page == 0) {
    clearstate();

    back.style.display = "none";

    let name = document.createElement("p");
    let para = document.createElement("p");
    para.className = "testi-con__content__para";
    name.className = "testi-con__content__name";
    name.textContent = testismonials[page].name;
    para.textContent = testismonials[page].quote;
    console.log("hi");
    contentParent.appendChild(para);
    contentParent.appendChild(name);
    setTimeout(() => {
      name.style.opacity = "100";
      para.style.opacity = "100";
    }, 200);
  }
  if (page == 0) return;

  clearstate();

  let name = document.createElement("p");
  let para = document.createElement("p");
  para.className = "testi-con__content__para";
  name.className = "testi-con__content__name";
  name.textContent = testismonials[page].name;
  para.textContent = testismonials[page].quote;
  console.log("hi");
  contentParent.appendChild(para);
  contentParent.appendChild(name);
  setTimeout(() => {
    name.style.opacity = "100";
    para.style.opacity = "100";
  }, 200);
});

document.addEventListener("DOMContentLoaded", () => {
  let name = document.createElement("p");
  let para = document.createElement("p");
  para.className = "testi-con__content__para";
  name.className = "testi-con__content__name";
  name.textContent = testismonials[page].name;
  para.textContent = testismonials[page].quote;
  console.log("hi");
  name.style.opacity = "100";
  para.style.opacity = "100";
  contentParent.appendChild(para);
  contentParent.appendChild(name);

  back.style.display = "none";
});
