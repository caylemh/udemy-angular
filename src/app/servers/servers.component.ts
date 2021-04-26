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

  constructor() {
    
   }

  ngOnInit(): void {
  }

  onCreateServer = () => {
    this.serverCreated = true;

    setTimeout(() => {
      this.serverName = "";
      this.serverCreated = false;
    }, 4000);
  }

}
