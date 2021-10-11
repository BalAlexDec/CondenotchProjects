"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    //Implementacion del metodo contructor
    function Person(name, age, adress) {
        this.name = name;
        this.age = age;
        this.adress = adress;
    }
    Person.prototype.printName = function () {
        console.log(this.name);
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        return currentYear - this.age;
    };
    Person.prototype.setAddres = function (addres) {
        this.adress = addres;
    };
    Person.prototype.getAddres = function () {
        return this.adress;
    };
    return Person;
}());
exports.Person = Person;
