
 function crearVectores(n,m){
    let arr = new Array(n);

    for(let l =0;l<arr.length;l++){
        arr[l] = Math.floor(Math.random() * m);
    }
    return arr;
}

function sumarvectore(v1,v2){
    //Primera parte
    /*if(v1.length == v2.length){
        for(let i=0;i<v1.length;i++){
            v1[i]= v1[i]+v2[i];

        }
        return v1;
    }*/

    //Redefincion de sumar vectores
    /*v1.forEach( function(value,index){
        console.log("foreach")
        v1[index]= v1[index]+v2[index];
        
    });
    return v1;*/

     //Redefincion de sumar map

     v1.map(
         function (value,index){
             //Utlizando map
             v1[index]= value+v2[index];
         }
     )
     return v1;
}

function filtrarpares(v1){
    let arrayfiltrer = v1.filter(
        function (value , index){
            //console.log(value);
             return value%2==1;
        }
    )
  

    

}

function sumatorio(v1){
    let my = v1.reduce(function (accumulator,value,index){
        return accumulator+value;
    });

    //console.log(my);
}

 function productoNumeroVectores(n,v){
        
    for(let i=0;i<v.length;i++){
            v[i]= v[i]*n;
        }
        return v;
    
}
 function restaVectore(v1,v2){
    if(v1.length == v2.length){
        for(let l=0;l<v1.length;l++){
            v1[l]= v1[l]-v2[l];

        }
        return v1;
    }
}

function productoVector(v1,v2){
    if(v1.length == v2.length){
        for(let l=0;l<v1.length;l++){
            v1[l]= v1[l]*v2[l];

        }
        return v1;
    }
}

module.exports={crearVectores,sumarvectore,productoNumeroVectores,restaVectore,productoVector,filtrarpares,sumatorio};