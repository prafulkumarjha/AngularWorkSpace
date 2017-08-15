import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer : boolean = false;
  serverCreationStatus : boolean = false;
  serverName = ' TestServer';
  servers = ["TestServer", "TestServer1"];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = true;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: Event) {
this.serverName = (<HTMLInputElement>event.target).value;
  }
}
