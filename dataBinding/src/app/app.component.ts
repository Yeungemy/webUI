import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [{type: 'server', serverName: 'server one', serverContent: 'server content one'}];

  onServerCreated(serverData: {serverName: string, serverContent: string}){
    this.servers.push({
      type: 'server',
      serverName: serverData.serverName,
      serverContent: serverData.serverContent
    });
  }

  onBlueprintCreated(serverData: {serverName: string, serverContent: string}){
    this.servers.push({
      type: 'blueprint',
      serverName: serverData.serverName,
      serverContent: serverData.serverContent
    });
  }

  onNameChanged(){
    this.servers[0].serverName = 'Changed';
  }

  onComponentDestroy(){
    this.servers.splice(0, 1);
  }
}
