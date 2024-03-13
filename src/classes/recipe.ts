export class Recipe {
    id: number;
    recipeName: string;
    categoryId:number;
    preparationTime:number;
    levelDifficulty:number;
    dateAdded:Date;
    listComponent:string[];
    preparationMethod:string[];
    userId:number;
    picture:string;
 
  constructor(){}
    // constructor(id: number, 
    //     name: string ,
    //     categoryId:number,
    //     preparationTime:number,
    //     LevelDifficulty:number,
    //     dateAdded:Date,
    //     listComponent:string[],
    //     preparationMethod:string[],
    //     userId:number,
    //     picture:string,) {
    //   this.id = id;
    //   this.name = name;
    //   this.categoryId=categoryId;
    //   this.preparationTime=preparationTime;
    //   this.LevelDifficulty=LevelDifficulty;
    //   this.dateAdded=dateAdded;
    //   this.listComponent=listComponent;
    //   this.preparationMethod=preparationMethod;
    //   this.userId=userId;
    //   this.picture=picture;
    // }
  }
