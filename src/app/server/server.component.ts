import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent implements OnInit {
  serverID = 10;
  serverStatus = 'offline';

  getServerStatus = () => this.serverStatus;

  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
