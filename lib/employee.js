// const { getDiffieHellman } = require("crypto");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}
module.exports = Employee;

// var dog={
//     name:"wolfy",
//     haircolor:"brown"
// }

// var cat ={
//     name:"meow",
//     haircolor:"black"
// }

// //es5 javascript 5 contructors
// // function Animal(name, haircolor){
// //      this.name=name
// //      this.haircolor=haircolor
// // }

// class Food{
//     constructor(type,price){
//         this.type=type
//         this.price=price
//     }
// }
// //es6 contructors
// class Animal extends Food{
//       constructor(name, haircolor,type,price){
//           super(type,price)
//         this.name = name;
//         this.haircolor = haircolor;
//       }

// }
// var dog=new Animal("wolfy","brown","purina",4.00)
// var cat =new Animal("meow","black","Iams",6.00)