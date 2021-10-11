const calculadora = require("./index.js");
const vectores = require("./vectores.js");


console.log("Sumar"+ " "+calculadora.sum(6,6));
console.log("Restar"+ " "+calculadora.sub(6,6));
console.log("dividir"+ " "+calculadora.div(6,6));
console.log("Multiplicar"+ " "+calculadora.mult(6,6));

let v1,v2;
v1 = vectores.crearVectores(10,10);
v2 = vectores.crearVectores(10,10);
console.log("Funcion crearc vectores"+" "+v1);
console.log("Funcion crearc vectores"+" "+v2);
//console.log("Esta funcion es sumar un vector"+vectores.sumarvectore(v1,v2)); //Fet
//console.log("Esta funcion filtra los pares"+vectores.filtrarpares(v1,v2)); // 
//console.log("Esta funcion es Productodenumero Vectores"+" "+vectores.productoNumeroVectores(2,v2));//Fet funciona
//console.log("Esta funcion es resta un vector"+" "+vectores.restaVectore(v1,v2)); //fet
//console.log("Esta funcion es producto de vector"+vectores.productoVector(v1,v2)); //fet
//console.log("Esta funcion hace el sumatorio de vector "+" "+vectores.sumatorio(v1));


//console.log("Esta funcion en producto numero"+" "+productoNumeroVectores(10,v1));*/