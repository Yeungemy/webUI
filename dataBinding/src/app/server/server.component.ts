import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { ServersComponent } from '../servers/servers.component';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  @Input('serverEle') server: {
    type: string,
    serverName: string,
    serverContent: string,
  };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor(){
    console.log("constructor called");
  }

  ngOnInit(){
    console.log('ngOnInit called');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    console.log('ngOnChanges called');
  }

  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
    setTimeout(() => {
      console.log('the paragraph content is ' + this.paragraph.nativeElement.textContent);
    }, 1000)
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
    setTimeout(() => {
      console.log('header _____' + this.header.nativeElement.textContent);
    }, 1000);
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }
}

