"use strict";
exports.__esModule = true;
var book_1 = require("./book");
var ciquentasombras = new book_1.Book("Cimquenta sombras de Gay", 800, "ES30050", "JKracing", "Puleva");
var harrypooter = new book_1.Book("Harry potter la piedra filosofal", 200, "ES20060", "JKRowling", "Marca");
console.log(harrypooter.toString());
harrypooter.getTitle();
harrypooter.setTitle("El Search");
console.log(harrypooter.setTitle("El Search"));
