import {Book} from "./book";

class Library{

    //Atributos
    private books:Book[];
    private address:string;
    private manager:string;

    constructor(books:Book[],addres:string,manager:string){
        this.books=books
        this.address = addres;
        this.manager = manager;
    }


    public toString():string{
       return  "Title "+this.books;
; 
    }

    //Preguntar ara ruben por funion .filter 
    getNumberOfBooks():number{
        return ;
    }
    findByAuthor(author:string):Book{
        return;
    }

}
export {Library};