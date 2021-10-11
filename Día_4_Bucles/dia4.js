function reto1(){

    for(i=0;i<10;i++){
        console.log(i+' ');
    }

    for(i=0; i<10;i++){
        if(i%2==0){
            console.log(i+' ');
        }
    }

    let cont=0;
    while(cont<10){
        cont++;
        console.log(cont+' ');
        
    }
    let y=0;
    while(y<10){
        y++;
        if(y%2==0){
            console.log(y+' ');
        }
    }
}
//reto1(); //fet

function reto2(){
let  persona = {
        "nombre": "1.Alex",
        "apellido": "Carrasco Balart",
        "AnyodeNacimiento":1984,
        "aficciones":["leer","bailar"],
        "dni":{"AnyodeExpedeicion":2020,
               "lugarNacimiento":"Cataluña"},
        "color":"castaño"
    };
 let  persona1 = {
     "nombre": "2.Pepe",
     "apellido": "Frascicco Casado",
     "AnyodeNacimiento":1974,
     "aficciones":["comer","Programar"],
     "dni":{"AnyodeExpedeicion":1964,
            "lugarNacimiento":"Madrid"},
     "color":"rubio"
 };
 let  persona2 = {
     "nombre": "3.Rosa",
     "apellido": "Carrasco Balart",
     "AnyodeNacimiento":2004,
     "aficciones":["leer","luchar"],
     "dni":{"AnyodeExpedeicion":2022,
            "lugarNacimiento":"Valencia"},
     "color":"rubio"
 };
 let  persona3 = {
     "nombre": "4.-Antonio",
     "apellido": "Carrasco Garcia",
     "AnyodeNacimiento":2024,
     "aficciones":["leer","dormir"],
     "dni":{"AnyodeExpedeicion":2024,
            "lugarNacimiento":"Cataluña"},
     "color":"negro"
 };
 let arr = [persona,persona1,persona2,persona3];
let index=0;

  /*  // Utlizando for in
    for(let ind in arr ){
        console.log(ind);
    }
    ///Utlizando for
    for(let y=0 ; y<arr.length;y++){
        console.log("Utlizando for"+arr[y].nombre);
    }
    
    
    for(let x of arr ){
        console.log(x.apellido);
    }

    let i=0;
    //Utlizando while
    while ( i < arr.length){
        console.log("Estoy utlizando while" +" " +arr[i].AnyodeNacimiento);
        i+=1;
    }
    // utizando do while
    do{ console.log("do  " +arr[index].apellido); index++;}while(index<arr.length);
*/


//Reto 3!!!!
index =0;
for(let i=0;i<arr.length;i++){
    console.log(arr[0].AnyodeNacimiento<=1978);

    if(arr[index].AnyodeNacimiento>=1978 && arr[index].AnyodeNacimiento<=2000){
        console.log("Tu edad esta entre 40 y 20");
    }else{
        console.log("Tu edad es menor de 20");
    }
}
/*

while(index<arr.length){
    if(arr[index].AnyodeNacimiento>=1978 && arr[index].AnyodeNacimiento<=2000){
        console.log("Tu edad esta entre 40 y 20");
    }else{
        console.log("Tu edad es menor de 20");
    }
    index++;
}

//Falta esto
for (let  x of arr){
     if(arr[x].AnyodeNacimiento>=1978 && arr[x].AnyodeNacimiento<=2000){
        console.log("Tu edad esta entre 40 y 20");
    }else{
        console.log("Tu edad es menor de 20");
    }
    index++;

}
console.log(x);
*/

}

reto2();


//Fet
function reto4(){
    let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    let nombres =["Alex","Juan","Pepe","Francisco"];
    let arr = [];
    let sumr = [];
    let arr2 = [];
    let sum =0;
    //Factorial

    // Con for
        function factorialfor(num){
            let r =1;
            for(let i=num;i>0;i--){
                r*=i;
            }
            return r;
        }
        function factorialwhiel(numer){
            let j=1;
            let k= numer;
            while(k>0){
                j*=k;
                k--;
            }
            return j;
        }
        console.log(factorialwhiel(7)+"Factorial utlizando el while"); 
        console.log(factorialfor(7)+"Factorial utlizando el for");
//fet
        let z=0;
        while(z<numeros.length){
            if(numeros[z]%2==0){
                console.log(numeros[z]+"Es multiple de 2");
                z= numeros.length+5;
            }
            z++;
        }

    for(let i=0; i<100;i++){
        sum =sum+i;
    }
    console.log(sum);

    let d =0
    // fet
    while( d<nombres.length){

        if(nombres[d]=="Pepe"){
            console.log("Es el pepe"+d);
            d=nombres.length+4;
        }
        
        d++;
    }

    for(let x=0;x<100;x++){    
        arr[x]= Math.floor(Math.random() * 20);
        arr2[x]= Math.floor(Math.random() * 20);
    }


    for(let k=0; k<arr.length;k++){
        sumr[k]= arr[k]+arr2[k];
        console.log(sumr[k]);
    }
    

    
}

//reto4();


 function reto5(){
    let  persona = {
        "nombre": "1.Alex",
        "apellido": "Carrasco Balart",
        "AnyodeNacimiento":1984,
        "aficciones":["leer","bailar"],
        "dni":{"AnyodeExpedeicion":2020,
               "lugarNacimiento":"Cataluña"},
        "color":"castaño"
    };
    let  persona1 = {
        "nombre": "2.Pepe",
        "apellido": "Frascicco Casado",
        "AnyodeNacimiento":1974,
        "aficciones":["comer","Programar"],
        "dni":{"AnyodeExpedeicion":1964,
                "lugarNacimiento":"Madrid"},
        "color":"rubio"
    };
    let  persona2 = {
        "nombre": "3.Rosa",
        "apellido": "Carrasco Balart",
        "AnyodeNacimiento":2004,
        "aficciones":["leer","luchar"],
        "dni":{"AnyodeExpedeicion":2022,
                "lugarNacimiento":"Valencia"},
        "color":"rubio"
    };
    let  persona3 = {
        "nombre": "4.-Antonio",
        "apellido": "Carrasco Garcia",
        "AnyodeNacimiento":2024,
        "aficciones":["leer","dormir"],
        "dni":{"AnyodeExpedeicion":2024,
                "lugarNacimiento":"Cataluña"},
        "color":"negro"
    };
    let arr = [persona,persona1,persona2,persona3];
    for (let i=0;i<arr.length;i++){
        if(arr[i].color=="castaño"){
            console.log(arr[i].nombre);
        }

        if(2021-arr[i].AnyodeNacimiento>=30){
            console.log(arr[i].nombre+" Tiene una edat" + 2021-arr[i].AnyodeNacimiento);
        }    
        
        if((arr[i].color=="negro"&&2021-arr[i].dni.AnyodeExpedeicion>5)||(2021-arr[i].AnyodeNacimiento>18&&arr[i].aficciones[i]=="comer"||arr[i].aficciones[i]=="dormir")){
            console.log(arr[i].dni.lugarNacimiento);
        }
        

        
    }
 }

 //reto5();