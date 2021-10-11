class Persona {

    //Contructor de Persona
    constructor(nombre,yearOfBirth,peso,altura,hobbies){
        this.nombre = nombre;
        this.yearOfBirth = yearOfBirth;
        this.peso=peso;
        this.altura =altura;
        this.hobbies = hobbies;
    }
    //Sobrecarga de contructor


    //Metodos
    /// Revisar Imc no da valor que deberia
    imc(){
        var imc,altura;
        this.altura = parseInt(this.altura)/100;
        imc= this.peso /(this.altura*this.altura)
        return imc;
    }

    edad(){
        let año = 2021;
        return 2021-this.yearOfBirth;
    }

    printall(){
        console.log("La objeto persona se llama" +" "+ this.nombre +" "+" tienen una edad"+" "+this.yearOfBirth+" "+"tiene un peso "+" "+this.peso+" y altura "+" "+ this.altura);
    }

    printhobbies(){
       for(let i =0;i<this.hobbies.length;i++){
        console.log(this.hobbies[i]);
       }
    }

    
    //Getter

    //Seeters
}




module.exports ={Persona}; 