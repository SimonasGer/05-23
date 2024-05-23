import apiService from "./api.js";

// function Student(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.sayHi = function(){
//         return [
//             this.firstName,
//             this.lastName
//         ]
//     }
// }

// let newStudent = new Student("Jonas", "Jonaitis");
// console.log(newStudent)
// console.log(newStudent.sayHi());

// for (let property of newStudent.sayHi()){
//     console.log(property);
// }

/*
sukurti konstruktoiu su siais property
Id
pavadinimas
kaina: (reguliari, akcija)

sukurti metoda kuris grazintu visa info apie preke. iprastine kaina jeigu  siandien ora 
temperatura mazaiau nei 20
jeigu daugiau, reikia sumazinti kaina (akcija)

*/

function Product(id, name, dPrice, rPrice){
    this.id = id;
    this.name = name;
    this.price = function(temperature){
        if (temperature < 20){
            return rPrice;
        } else {
            return dPrice
        }
    }
    this.info = function (temperature) {
        return `Id: ${this.id}, Pavadinimas: ${this.name}, Kaina: ${this.price(temperature)} eurai.` 
    }
}

let produktas = new Product(1, "Sunu edalas", 20, 30);
let search
var currentDate = new Date();
let today = `${currentDate.getFullYear()}-0${currentDate.getMonth() + 1}-${currentDate.getDate()} ${currentDate.getHours()}`;
apiService()
.then(result => search = result)
.then(() => {
    let time = search.forecastTimestamps;
    let current = time.filter((hour) => hour.forecastTimeUtc == `${today}:00:00`);
    console.log(produktas.info(current[0].airTemperature));
})

