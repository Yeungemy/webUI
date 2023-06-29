import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  @Output('srCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  serverName: string;
  serverContent: string;
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor(){}

  onBlueprintAdded(){
    this.serverCreated.emit({
      serverName: this.serverName,
      serverContent: this.serverContent
    });
  }

  onServerAdded(){
    this.serverCreated.emit({
      serverName: this.serverName,
      serverContent: this.serverContent
    });
    console.log('%%%%%%%%%%%%%%%%%%%%%%' + this.serverName);
  }

  // onServerAdded(serverNameInput: HTMLInputElement, serverContentInput: ElementRef){
  //   this.serverName = serverNameInput.value;
  //   this.serverContent = this.serverContentInput.nativeElement.value;
  //   this.serverCreated.emit({
  //     serverName: this.serverName,
  //     serverContent: this.serverContent
  //   });
  // }

  // onBlueprintAdded(serverNameInput: HTMLInputElement, serverContentInput: ElementRef){
  //   this.serverName = serverNameInput.value;
  //   this.serverContent = this.serverContentInput.nativeElement.value;
  //   this.serverCreated.emit({
  //     serverName: this.serverName,
  //     serverContent: this.serverContent
  //   });
  // }
}
