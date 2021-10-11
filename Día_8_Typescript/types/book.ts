class Book{
    private title:string;
    private nPages:number;
    private isbn : string;
    private author : string;
    private editorial : string;

    constructor(title:string,nPage:number,isbn:string,author:string,editorial:string){
        this.title = title;
        this.nPages=nPage;
        this.isbn=isbn;
        this.author=author;
        this.editorial=editorial;
    }

    //Gettert and Settters
    //Title
    public setTitle(title:string){
        this.title=title;
    }
    public getTitle ():string{
        return this.title;
    }
    //nPages
    public setnPages(nPages:number){
        this.nPages=nPages;
    }
    public getnPages ():number{
        return this.nPages;
    }
    //isbn
    public setIsbn(isbn:string){
        this.isbn=isbn;
    }
    public getIsbn ():string{
        return this.isbn;
    }
    //author
    public setAuthor(author:string){
        this.author=author;
    }
    public getauthor ():string{
        return this.author;
    }
    //editorial

    public setEditorial(editorial:string){
        this.editorial=editorial;
    }
    public getEditorial ():string{
        return this.editorial;
    }


    //To String method
    toString():string{
        return  this.title+" "+this.nPages+" "+this.isbn+" "+this.author+" "+this.author+" "+this.editorial;
    }
}
export {Book};