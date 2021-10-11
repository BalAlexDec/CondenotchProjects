const classpersona = require("./semana2/persona");
const classCont = require("./Contacts.js")
let arr = ["Leer","Comer","Correr","Programar"];
let arrPersonas =[];

//Metodos classe persona
var persona = new classpersona.Persona("Álex",1999,65,185,arr);
var juan = new classpersona.Persona("Juan",1945,80,1.65,arr);
arrPersonas = [persona,juan];

//Metodos de classe Contacts
let contacto1 = new classCont.Contacts();
contacto1.persona = arrPersonas;
juan.altura=1999;
contacto1.printPersona();