function reto1(){
    let texto = "dd";
    let numero = 2;
    let boolean = true;
    let array = [texto,numero,boolean];
    console.log(array);
}
//reto1();


function reto2(){
    let miMap = new Map();
    miMap.set("numero",1);
    miMap.set(1,1);
    miMap.set("string","Mi String");
    miMap.set("boolean",true);
    miMap.set("array",[1,2,3,4]);
    miMap.set(4,["Juan","Pepe","Ana","Maria"]);
    
    console.log(miMap);
    console.log(miMap.size);
    console.log(miMap.get(3));
    miMap.delete(string);
    console.log(miMap);
}
//reto2();
function reto3(){
    let miSet = new Set();
    miSet.add(1);
    miSet.add("1");
    miSet.add("Saludo");
    miSet.add([1,2,3,4]);
    miSet.add(1);
    
    console.log(miSet);
    console.log(miSet.size);
    console.log(miSet.has(2));
    console.log(miSet.delete(1));
    console.log(miSet);
}
//reto3();

function reto5(){
    let array1 = ["a","b","c","d","e"];
    let array2 = ["ab","bc","dc","ed","fe"];
    let array3 = ["abe","bac","coc","ded","ese"];
    let numeros =[1,2,3,4,5];
    let matriz = [array1,array2,array3];
    console.log(matriz[2]);
    console.log(matriz[2][4][1]);
    matriz[2] = numeros;
    console.log(matriz[2]);
    matriz[1][3]=true;
    console.log(matriz[1][3]);
    matriz[1].push("alex");
    matriz[1].shift();
    matriz[2].pop();
    matriz[2].sort();
}
//reto5;
//Reto 6
function reto6(){
let persona = {
     "nombre":"Pepe",
      "edat": 35,
      "esVaron":true,
      "aficiones":["nadar","patinar","leer"],
      "dni": {"numero": 47972280,
              "fechadeExpedicion":" 20 de Marzo de 2010"
}}
console.log(persona.nombre);
console.log(persona.aficiones);
console.log(persona.aficiones[1]);
console.log(persona.dni);
console.log(persona.dni.fechadeExpedicion);
}
//reto6();

function repto7(){
let mesa ={"id":1,"Responsable":"JuanCarlos"};
let Chef = {"id":2,"Nombre":"Juancarlos"};
let menus = {"id":3,"platos":["pasta","canalones","pizza"]};

let basedatos = [mesa,menus,Chef];

console.log(basedatos[2].platos);
console.log(basedatos[1].Nombre);
console.log(basedatos[0].id);
}
//reto7();


//Repto opcional

function retoOpcional(){
let padre = {"nombre": "Toni", "Apellido":["Carrasco","Garcia"],"edat":55,"padres":{}};
let madre = {"nombre": "Rosa", "Apellido":["Ruiz","Loizaga"],"edat":55,"padres":["Rosa","Juan"]};
let json = {"nombre": "Alex", "Apellido":["Carrasco","Balart"],"edat":22,"padres":[padre,madre]};

console.log(json.padres[1].padres);
}

