import {Book} from "./book";
import {Person} from "./person";
import {Contacts} from "./contacts"
import {Library} from "./library";
import {Vector} from "./Vector";

console.log("Vectores")
console.log("_____________________")

let v1 = new Vector(10,10);
let v2 = new Vector (10,10);
v1.print();
v2.print();
console.log(v1.add(v2));