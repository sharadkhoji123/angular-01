import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-servers', //element style of declaration   
 //selector: '[app-servers]',
 //class style of declaration selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverID = 10;
  serverstatus = 'online';
  allowNewServer = false;
  serverCreationStatus ='No server was created';
  servername='Test';
  servercreated = false;
  servers = ['TestServer']
  constructor() { 
     setTimeout(()=> {
       this.allowNewServer=true;
    },2000);
  }
  getServerStatus(){
  return this.serverstatus;
  }
  ngOnInit(): void {
  }

  onCreateServer(){
    this.servercreated = true;
    this.servers.push(this.servername)
    this.serverCreationStatus = 'Server is created! Name of the server is ' + this.servername;
  }
  onUpdateServerName(event: Event){
    this.servername=(<HTMLInputElement>event.target).value;
  }
}
