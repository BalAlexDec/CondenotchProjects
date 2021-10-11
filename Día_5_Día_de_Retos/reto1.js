function reto1(){
    let n=6 , d=25;
    let bol;
    let sum = n+d;
    console.log("Punto 1 "+ sum);

    let text = "Lorem ipsum dolor sit amet consecetur adipsifi elit phasellus mattis vehicula consequats . Proin dapibis nunc quam nec dictum erat feugiat vitae";
    console.log("4."+text.length);
    console.log("5."+text.replace(/\s+/g, ''));
   

    let result = text.includes("sit");
    console.log("6.La palabra  sit esta en texto "+result);
    console.log(sum>30);
    console.log(result);
}
//reto1(); //Funciona esta todo ok


function reto2(){
    let total;
    let result;
    let importeneto=1999;
    let pais = "España";

    if(pais=="España"){
        if(importeneto>=2000){
            //console.log("Soy mas grande de 2000");
            total = importeneto*16/100;
            result = importeneto+total;
            console.log("El resultado si el importe neto  supera 2000 y no es estranjero "+" "+result);
        }else{
            //console.log("Soy mas menor de 2000");
            total = importeneto*10/100;
            result = importeneto+total;
            console.log("El resultado si el importe neto no supera 2000 y no es estranjero "+" "+result);
        }
    }else{
        if(importeneto>=2000){
            total = importeneto*16/100;
            let total2 = importeneto *10/100;
            result = importeneto+total+total2;
            console.log("El resultado si el importe neto si supera 2000 y es estranjero "+" "+result);
        }else{
            total = importeneto*10/100;
            let total2 = importeneto *10/100;
            result = importeneto+total+total2;
            console.log("El resultado si el importe neto no supera 2000 y es estranjero "+" "+result);
        }
    }
}

//reto2(); Mañana Preguntar a ruben

//reto bucles
function reto3(){
    
    let numero = [2,10,45,33,22,14];
    let total=0;
    for(let x=0;x<100;x++){
        total= x**2+total;
    }
    console.log("1.*Bucles*.El resultat de suma de quadrats 1 al 100 es"+" "+total);

        //fet
    for(let d=0; d<numero.length;d++){
        numero[d] = numero[d]*2;
        console.log("2.*Bucles*."+numero[d]);
    }


}
 //reto3(); //Fet

//reto final 1
function retofinal1(){
    let list = ["Ready player one", "El nombre del viento","El temor de un hombre sabio","Cien años de soledad","Origen"];

    let ordenLongitud = list.slice();

    //Comparo las longitudes y las mas tamaño las pone debajo
    ordenLongitud.sort(function(a, b) {
        return a.length - b.length
    });

    for(let i = 0; i< ordenLongitud.length;i++){
        let x = ordenLongitud.length-1;
        
        if(i!=x){
            console.log(ordenLongitud[i] +"["+ordenLongitud[i].length+"]");
        }else{
            
        }       
        if(i==x){
            //Al dejar el array ordenado por tamaño siendo la utlima posicion la cadena mas
            //larga podempos decir que la ultima posicion nos la ponga en negrita
            let text = ordenLongitud[i]+"["+ordenLongitud[i].length+"]";
            console.log(text.bold());
        }
    }
}

//retofinal1(); //Fet

//retofinal1();
//reto final 2cls

function retofinal2(){
    let arr = new Array(10);
    let arr2 = new Array(10);
    let matriz = new Array(10);
    let array = new Array(10);
    let num =Math.floor(Math.random() * 50);
    for(let i =0 ; i<10;i++){
        arr[i]=arr2;
        matriz[i]=array;
        for(let l=0 ; l<10;l++){
            arr[i][l]=Math.floor(Math.random() * 50);
            matriz[i][l]=Math.floor(Math.random() * 50);
        }        
    }
    console.log("Primer array"+arr);

    for(let i =0 ; i<10;i++){
        for(let l=0 ; l<10;l++){
            matriz[i][l]= arr[i][l]+matriz[i][l];
            matriz[i][l] =  matriz[i][l] * num;
        }        
    }
    console.log(matriz);
 

}
retofinal2();