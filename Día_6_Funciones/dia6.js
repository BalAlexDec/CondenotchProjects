
function reto1(operacion,x=12,y=12){
    if(operacion=="sum"){
        return x+y;
    }

    if(operacion=="subs"){
        return x-y;
    }
    if(operacion=="mult"){
        return x*y;
    }
    if(operacion=="div"){
        return x/y;
    }
    
}
console.log( "Reto1 funcion"+ " "+reto1("subs"));
