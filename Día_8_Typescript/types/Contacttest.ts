import {Book} from "./book";
import {Person} from "./person";
import {Contacts} from "./contacts"
import {Library} from "./library";
import {Vector} from "./Vector";

let Antonio = new Person("Antonio Carrasco Balart",50,"Mare de deu pilar 36 3*1");
let Alex = new Person("Alex Carrasco Balart",22,"Mare de deu pilar 36 3*1");

let arr = [Antonio,Alex];
//Contacts
let agenda = new Contacts();
agenda.people = arr;
agenda.printCalendar();
