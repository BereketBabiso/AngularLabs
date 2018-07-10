import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  inputs:['title:titlex']
})
export class AppComponent {
  public title = "Simple Counter";
  public value:Number;
   constructor(){
    this.value=3;
  }

  test(count:Number){
    this.value=count;
    
  }
}
