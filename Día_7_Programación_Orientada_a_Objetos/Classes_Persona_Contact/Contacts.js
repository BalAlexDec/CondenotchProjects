const classpersona = require("./semana2/persona");
class Contacts {

    constructor(){
        this.persona= new Array();
    }
    prova(){
        console.log("esto es una prueba")
    }
    printPersona(){
        
        for(let i=0; i<this.persona.length;i++){
           this.persona[i].printall();

            
            
        }
        
    }
}

module.exports ={Contacts}; 