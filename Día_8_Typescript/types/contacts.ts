import {Person} from "./person";

class Contacts{
    public people:Person[];
    
    constructor(){
        this.people = new Array();
    }


    printCalendar(){
        for(let i=0 ; i<this.people.length;i++){
            for( let resultado in this.people[i]){
                console.log(this.people[i][resultado]);
            }
        }
    }
}
export {Contacts};