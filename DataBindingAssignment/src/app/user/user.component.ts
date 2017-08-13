import { Event } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username : String = "";
  userFlag : boolean = true;
  constructor() { }

  ngOnInit() {
  }
  onUpdateUser(event:Event) {

    this.userFlag = false;
  }
  onAddUser() {
    this.username = " ";
  }

}
