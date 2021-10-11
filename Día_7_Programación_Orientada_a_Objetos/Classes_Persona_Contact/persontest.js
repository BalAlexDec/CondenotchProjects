const classpersona = require("./persona");
const classCont = require("./Contacts.js.js")
let arr = ["Leer","Comer","Correr","Programar"];
let arrPersonas =[];

//Metodos classe persona
/*var persona = new classpersona.Persona("Álex",1999,65,185,arr);
var juan = new classpersona.Persona("Juan",1945,80,1.65,arr);
arrPersonas = [persona,juan];
persona.printhobbies();
console.log(persona.edad());
persona.imc();
persona.printall();
//console.log(persona);*/

//Metodos de classe Contacts
let contacto1 = new classCont.Contacts();
contacto1.array(persona,juan)
juan.altura=1999;
contacto1.printPersona();

classCont.printall();
//classCont.Contacts.printPersona();


