import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit{
  magicNumber = Math.floor(Math.random() * 10);
  fib: number[] = [];
  intervalId: any;
  stopNow = false;

  constructor() {};

  ngOnInit(){}

  fibonacci(num) {
    if (num <= 1) return 1;
    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  }
  
  onGameStarted(){
    for(let i = 0; i < this.magicNumber; i++){
      this.intervalId = setInterval(this.fibonacci(i), 1000);
      this.fib.push(this.fibonacci(i));
    }
    return this.fib;
  }

  onGameStopped() {
  
    clearInterval(this.intervalId);
  }
}
