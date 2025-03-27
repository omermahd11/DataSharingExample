import { Component, Input } from '@angular/core';
import { User } from '../../User';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-b',
  imports: [FormsModule],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {
childComponentMessage = " Hello from Component B"
 @Input() message = ""

 id : number = 0
 name : string = ""
 email : string = ""

  service : DataService

  constructor( service : DataService){

    this.service = service
  }


 addUser(){
  var user = new User(this.id,this.name,this.email)
  this.service.addUser(user)
 }
}
