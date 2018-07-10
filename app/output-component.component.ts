import { Component, OnInit,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-output-component',
  outputs:['onHide'],
  template: `
    <button (click)="start()">click here</button>
  `,
  styles: []
})
export class OutputComponentComponent implements OnInit {
    public onHide : EventEmitter<Number>;
  constructor() { 
    this.onHide = new EventEmitter();
  }
  start():void{
    this.onHide.emit(100);
  }

  ngOnInit() {
  }

}
