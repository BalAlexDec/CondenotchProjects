class Person{
    //declaracion de atributos
    public name :string;
    public age : number;
    private adress : string;

    //Implementacion del metodo contructor
    constructor(name:string,age:number,adress:string){
        this.name = name;
        this.age = age;
        this.adress = adress;
    }

    printName():void{
        console.log(this.name);
    }
    yearOfBirth(currentYear:number):number{
        return currentYear-this.age;
    }
    
    setAddres(addres:string){
        this.adress=addres;
    }

    public getAddres ():string{
        return this.adress;
    }
}
export {Person};
