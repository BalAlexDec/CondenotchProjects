function reto1(){
let semafora ="rojo";
let passancotxes= false;

if(semafora=="rojo" && passancotxes==true){
    console.log("No puedes passar , esta en rojo loco!!");
}else if(semafora=="verde" && passancotxes==true){
    console.log("No puedes passar , passan cotxes");
}else{
    console.log("Puedes passar ");
}
    let peatonal = semafora == "rojo" && passancotxes==true ? console.log("No puedes passar"): semafora=="verde" && passancotxes == true ? console.log("No puedes passar"): console.log("Puedes passar");

}

//reto1();//Echo

function reto2(){
    let x;
       switch(x){
           case "pollo": console.log("POLLO AL HORNO CON PATATAS,El pollo al horno con patatas es una receta muy completa que gustará tanto a niños como los más mayores de la casa. Es muy fácil de hacer y no requiere esfuerzo en la cocina.");
           break;
           case "azucar": console.log("Bizcocho de naranja ,Los bizcochos son unos dulces hechos para triunfar ya que prepararlos es muy fácil e incluso entretenido (perfecto para hacerlo con niños) y el resultado queda fantástico, con poco esfuerzo consigues bastante cantidad y, por supuesto, si sigues una receta paso a paso como ésta quedan buenísimos y esponjosos.")
           break;
           case "platano": console.log("Banana bread,El banana bread es un clásico de la pastelería anglosajona. Aunque la traducción literal sería pan de plátano, en realidad es un bizcocho enriquecido con la fruta. Esponjoso, con mucho sabor y un punto de humedad maravilloso, en Estados Unidos y Reino Unido se suele comer durante el desayuno o la merienda,");
           break;
           case "manzana": console.log("Tarta de manzana");
           break;
           case "macarrones": console.log("Macarrones gratinados con sofrito de tomate,Estos macarrones a rayas, o penne rigatti, con sofrito de tomate, zanahorias, cebollas y atún en conserva, se preparan con una receta facilísima y rápida. Luego se gratinan con queso al horno.");
           break;
           case "queso": console.log("Crema de queso y mango,Este plato, está cocinado con una base de Postres y pertenece a los platos de la cocina Creativa. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Postre.");
           break;
           case "fresas": console.log("Fresas asadas al Oporto,Precalentar el horno a 180º C y preparar una bandeja que pueda recoger bien los jugos sin salirse. No queremos amontonar las fresas. Se puede cubrir con papel de horno o de aluminio.");
           break;
           case "nata": console.log("Nata Montada,Seguro que muchos de vosotros (bueno, de nosotros…) habéis utilizado a menudo nata montada comprada. Es tan cómoda, está tan rica (en azúcares sobre todo) y para algunos incluso resulta tan divertido servirla a presión… Pero ¿sabéis que hacer nata montada no es tan difícil como pensamos?Lo primero que haremos es explicar y diferenciar qué es la nata montada y qué es el chantilli. Aunque mucha gente no hace diferencias entre una y otra, lo cierto es que existe una pequeña variante: la vainilla ");
           break;
           case "caramelo": console.log("Receta de Caramelo liquido,El caramelo líquido se emplea para múltiples elaboraciones de postre, siendo los flanes los más populares. Podemos comprarlo ya hecho o prepararlo nosotros mismos en la comodidad del hogar, una opción, además, mucho más económica.");
           break;
           case "galletas": console.log("Galletas de avena con chocolate ¿Te gustan las galletas de avena? Pues estas te encantarán. Solo tienes que mezclar mantequilla, con azúcar, huevo, copos de avena machacados, levadura, una pizca de sal, vainilla y pepitas de chocolate");
           break;
           case "salmon": console.log("salmon a la naranja");
           break;

           default: console.log("Impossible proponer receta")
            break;
       }
}
//reto2()//fet;

function reto3(){
     let dj=true,platos=3,barralibre=2,coctelb=false;
    if((platos==3&&dj==true&&barralibre==2)||coctelb==true&&menus==2&&barralibre==1)
        console.log("Este restaurante cumple las condiciones");
    else
        console.log("Este restaurante no cumple las condiciones")
      
    let restaurante = (platos==3&&dj==true&&barralibre==2)||coctelb==true&&menus==2&&barralibre==1 ? "Este restaurante cumple las condiones": "Este no restaurante cumple las condiones"
    console.log(restaurante);
}
//reto3(); //fet

function reto4(){
    let  persona = {
           "nombre": "Alex",
           "apellido": "Carrasco Balart",
           "AnyodeNacimiento":1560,
           "aficciones":["leer","bailar"],
           "dni":{"AnyodeExpedeicion":2020,
                  "lugarNacimiento":"Cataluña"},
           "color":"castaño"
       };
    let  persona1 = {
        "nombre": "Pepe",
        "apellido": "Frascicco Casado",
        "AnyodeNacimiento":1974,
        "aficciones":["comer","Programar"],
        "dni":{"AnyodeExpedeicion":1964,
               "lugarNacimiento":"Madrid"},
        "color":"rubio"
    };
    let  persona2 = {
        "nombre": "Rosa",
        "apellido": "Carrasco Balart",
        "AnyodeNacimiento":1964,
        "aficciones":["leer","luchar"],
        "dni":{"AnyodeExpedeicion":2022,
               "lugarNacimiento":"Valencia"},
        "color":"rubio"
    };
    let  persona3 = {
        "nombre": "Antonio",
        "apellido": "Carrasco Garcia",
        "AnyodeNacimiento":2024,
        "aficciones":["leer","dormir"],
        "dni":{"AnyodeExpedeicion":2024,
               "lugarNacimiento":"Cataluña"},
        "color":"negro"
    };


    let arr = [persona,persona1,persona2,persona3];

    //Pelo castaño fet
    if(arr[0].color=="castaño"){
        console.log("Arr[0] Pelo castaño"+" "+arr[0].nombre);
    }

    if(arr[1].color=="castaño"){
        console.log("Arr[1] Pelo castaño"+" "+arr[1].nombre);
    }
    if(arr[2].color=="castaño"){
        console.log("Arr[2] Pelo castaño"+" "+arr[2].nombre);
    }

    if(arr[3].color=="castaño"){
        console.log("Arr[3] Pelo castaño"+" "+arr[3].nombre);
    }


    //Edat mayor a 30
   if(2021-arr[0].AnyodeNacimiento>=30){
       console.log("Arr[0] edat >30"+" "+arr[0].nombre);
    }
    if(2021-arr[1].AnyodeNacimiento>=30){
        console.log("Arr[1] edat >30"+" "+arr[1].nombre);
    } 
    if(2021-arr[2].AnyodeNacimiento>=30){
        console.log("Arr[2] edat >30"+" "+arr[2].nombre);
    }
    if(2021-arr[3].AnyodeNacimiento>=30){
        console.log("Arr[3] edat >30"+" "+arr[3].nombre);
    }

    if(arr[0].color=="negro"||arr[1].color=="negro"||arr[2].color=="negro"||arr[3].color=="negro"){ 
        if(arr[0].dni.AnyodeExpedeicion>5){
            console.log(arr[0].dni.lugarNacimiento);
        }
        if(arr[1].dni.AnyodeExpedeicion>5){
            console.log(arr[1].dni.lugarNacimiento);
        }
        if(arr[2].dni.AnyodeExpedeicion>5){
            console.log(arr[2].dni.lugarNacimiento);
        }
        if(arr[3].dni.AnyodeExpedeicion>5){
            console.log(arr[3].dni.lugarNacimiento);
        }

    }
    
    if(2021-arr[0].AnyodeNacimiento<18||2021-arr[1].AnyodeNacimiento<18||2021-arr[2].AnyodeNacimiento<18||2021-arr[3].AnyodeNacimiento<18){
        if(arr[0].aficciones[0]=="comer"||arr[0].aficciones[0]=="dormir"||arr[0].aficciones[1]=="comer"||arr[0].aficciones[1]=="dormir"){
            console.log(arr[0].dni.lugarNacimiento);
        }
        if(arr[1].aficciones[0]=="comer"||arr[1].aficciones[0]=="dormir"||arr[1].aficciones[1]=="comer"||arr[1].aficciones[1]=="dormir"){
            console.log(arr[1].dni.lugarNacimiento);
        }
        if(arr[2].aficciones[0]=="comer"||arr[2].aficciones[0]=="dormir"||arr[2].aficciones[1]=="comer"||arr[2].aficciones[1]=="dormir"){
            console.log(arr[2].dni.lugarNacimiento);
        }
        if(arr[3].aficciones[0]=="comer"||arr[3].aficciones[0]=="dormir"||arr[3].aficciones[1]=="comer"||arr[3].aficciones[1]=="dormir"){
            console.log(arr[3].dni.lugarNacimiento);
        }
    }



}

let arrayPersonas = [persona, persona1, persona2, persona3]


if (arrayPersonas[0].colorPelo == "castaño")
    console.log(arrayPersonas[0].nombre);
if (arrayPersonas[1].colorPelo == "castaño")
    console.log(arrayPersonas[1].nombre);
if (arrayPersonas[2].colorPelo == "castaño")
    console.log(arrayPersonas[2].nombre);
if (arrayPersonas[3].colorPelo == "castaño")
    console.log(arrayPersonas[3].nombre);


let año = 2021
if (arrayPersonas[0].AnyodeNacimiento < 1991)
    console.log(año - arrayPersonas[0].AnyodeNacimiento);
if (arrayPersonas[1].AnyodeNacimiento < 1991)
    console.log(año - arrayPersonas[1].AnyodeNacimiento);
if (arrayPersonas[2].AnyodeNacimiento < 1991)
    console.log(año - arrayPersonas[2].AnyodeNacimiento);
 if (arrayPersonas[3].AnyodeNacimiento < 1991)
    console.log(año - arrayPersonas[3].AnyodeNacimiento);



if ((arrayPersonas[0].colorPelo == "negro" && (año - arrayPersonas[0].dni.AnyodeExpedeicion) > 5) || 
 (año - arrayPersonas[0].AnyodeNacimiento < 18 && (arrayPersonas[0].aficiones.includes("comer") || arrayPersonas[0].aficiones.includes("dormir"))))
     console.log (arrayPersonas[0].dni.lugarNacimiento);


 if ((arrayPersonas[1].colorPelo == "negro" && (año - arrayPersonas[1].dni.AnyodeExpedeicion) > 5) || 
 (año - arrayPersonas[1].AnyodeNacimiento < 18 && (arrayPersonas[1].aficiones.includes("comer")|| arrayPersonas[1].aficiones.includes("dormir"))))
      console.log (arrayPersonas[1].dni.lugarNacimiento);


 if ((arrayPersonas[2].colorPelo == "negro" && (año - arrayPersonas[2].dni.AnyodeExpedeicion) > 5) || 
(año - arrayPersonas[2].AnyodeNacimiento < 18 && (arrayPersonas[2].aficiones.includes("comer")|| arrayPersonas[2].aficiones.includes("dormir"))))
    console.log (arrayPersonas[2].dni.lugarNacimiento);
  

 if ((arrayPersonas[3].colorPelo == "negro" && (año - arrayPersonas[3].dni.AnyodeExpedeicion)) || 
 (año - arrayPersonas[3].AnyodeNacimiento < 18 && (arrayPersonas[3].aficiones.includes("comer") || arrayPersonas[3].aficiones.includes("dormir"))))
     console.log (arrayPersonas[3].dni.lugarNacimiento);

reto4();
