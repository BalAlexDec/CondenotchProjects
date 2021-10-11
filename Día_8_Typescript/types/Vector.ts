
class Vector {
    private elements : number[];
    //n: longitud del vector
    //m: maximo valores de un vector
    constructor(n:number,m:number){
        this.elements = new Array(n);

        for(let i =0;i<this.elements.length;i++){
            this.elements[i]= Math.floor(Math.random() * m);
        }
        
    }

    print():void{
        console.log(this.elements);
    }
    add(v1:Vector):Vector{
        let result:Vector;
        result = new Vector(this.elements.length,10);
        for(let i =0;i<this.elements.length;i++){
            result.elements[i] = this.elements[i]+v1.elements[i];
        }
        return result;
    }
    /*subs(v1:Vector):Vector[]{
        let result:Vector[];
        for(let i =0;i<this.elements.length;i++){
            result = this.elements[i]-v1[i];
        }
        return result;
    }

    mult(v1:Vector):Vector{
        let result : Vector;
        for(let i =0;i<this.elements.length;i++){
            result = this.elements[i]*v1[i];
        }
        return;
    }

    multNumber(n:number):Vector{
        let result= new Array[];
        for(let i =0;i<this.elements.length;i++){
            result = this.elements[i] * n;
        }
        return;
    }
*/


    
}
export {Vector};