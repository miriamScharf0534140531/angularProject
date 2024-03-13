export class Category {
    id: number;
    name: string;
    address:string;
    rout:string;
 
  
    constructor(id: number, name: string,address:string,rout:string) {
      this.id = id;
      this.name = name;
      this.address=address;
      this.rout=rout;
    }
  }