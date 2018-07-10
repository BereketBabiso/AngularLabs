import { Component,Input, OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  outputs:['counterChange'],
  template: `
    <h1>{{titl}}</h1>
    <p class="class1">
    <button (click)="decrement()">-</button> {{counterValue}} <button (click)="increment()">+</button>
    </p>
    <p>{{evtt}} and {{value}}</p>
    <p><ng-content></ng-content></p>
    <app-output-component (onHide)="showResult($event)"></app-output-component>
  `,
  styles: ['p.class1{border:1px yellow solid;width:100px;height:50px;padding-top:15px;margin:auto}','button{margin-left:10px;margin-right:10px}']
})
export class CounterComponent implements OnInit {
  public counterValue;
  @Input() titl;
  @Input() value; 
  public counterChange:EventEmitter<Number>;
  public evtt;

  constructor() { 
    this.counterValue =0;
    this.counterChange = new EventEmitter();
  }
  ngOnInit(){
    this.counterValue =this.value || 0;
  }

 
  decrement(){
    this.counterValue--;
   this.counterChange.emit(this.counterValue);
     return false; // tells the browser not to propagate the event upward
  }
  increment(){
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
    return false;
  }
  // change(){
  //   this.counterValue =this.value;
  // }

  showResult(evt:Number):void{
    console.log(evt);
    this.evtt =evt;
  }

}
