import {Book} from "./book";
import {Person} from "./person";
import {Contacts} from "./contacts"
import {Library} from "./library";
import {Vector} from "./Vector";


//Person
let Antonio = new Person("Antonio Carrasco Balart",50,"Mare de deu pilar 36 3*1");
let Alex = new Person("Alex Carrasco Balart",22,"Mare de deu pilar 36 3*1");
Alex.printName();
console.log(Alex.yearOfBirth(1964));
Alex.setAddres("jamaica");
console.log(Alex.getAddres());

/*//Contacts
let agenda = new Contacts();
agenda.people();
agenda.printCalendar();*/

//Books
let ciquentasombras =new Book("Cimquenta sombras de Gay",800,"ES30050","JKracing","Puleva");
let harrypooter = new Book("Harry potter la piedra filosofal",200,"ES20060","JKRowling","Marca");
console.log(harrypooter.toString());
harrypooter.getTitle();
harrypooter.setTitle("El Search");
console.log(harrypooter.setTitle("El Search"));
//______________________________
console.log("Library")
console.log("_____________________")
/*// library
let listalibros : Book[];
listalibros = [harrypooter,ciquentasombras];
let libreria = new Library(listalibros,"Sala B 246","Javier Dominguez");
libreria.toString();
libreria.getNumberOfBooks();
libreria.findByAuthor("JkRowling");


console.log("Vectores")
console.log("_____________________")

let v1 = new Vector(10,10);
let v2 = new Vector (10,10);
v1.print();*/