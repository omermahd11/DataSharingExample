import { Injectable } from '@angular/core';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // list of users

  users : User[]  = [ new User(100, "Tim" , "tim@yahoo") , 
                     new User(200, "Reem" , "reem@yahoo") , 
                     new User(300, "Susan" , "susan@yahoo") 
                    ]

    constructor() { }

  getUsers(){
    return this.users
  }
  
  addUser(user : User){
   this.users.push(user)
  }

  updateUser( id: number , name :string , email: string ){
     

  }
}
