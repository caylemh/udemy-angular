import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];

  constructor() {
    
   }

  ngOnInit(): void {
  }

  onCreateServer = () => {
    this.serverCreated = true;
    this.servers.push(this.serverName);

    setTimeout(() => {
      this.serverName = "";
      this.serverCreated = false;
    }, 4000);
  }

}
