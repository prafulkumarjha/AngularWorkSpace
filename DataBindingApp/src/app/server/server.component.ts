import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId:number = 10;
  serverStatus:String = "offline";
  


  constructor() { 
    this.serverStatus = Math.random()>0.5?"Online":"Offline";
  }
  getColor() {
   if(this.serverStatus ==="Online")
    return "Green";
   else 
    return "Red";
  }

  ngOnInit() {
  }

}
