import { Component } from '@angular/core';
import { User } from '../../User';
import { DataService } from '../data.service';

@Component({
  selector: 'app-a',
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {


  users : User[] = []

  service : DataService

  constructor( service : DataService){

    this.service = service
  }

  displayUsers(){
     this.users = this.service.getUsers()
  }
}
