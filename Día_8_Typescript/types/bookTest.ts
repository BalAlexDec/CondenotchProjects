import {Book} from "./book";
import {Person} from "./person";
import {Contacts} from "./contacts"
import {Library} from "./library";
import {Vector} from "./Vector";

let ciquentasombras =new Book("Cimquenta sombras de Gay",800,"ES30050","JKracing","Puleva");
let harrypooter = new Book("Harry potter la piedra filosofal",200,"ES20060","JKRowling","Marca");
console.log(harrypooter.toString());
harrypooter.getTitle();
harrypooter.setTitle("El Search");
console.log(harrypooter.setTitle("El Search"));