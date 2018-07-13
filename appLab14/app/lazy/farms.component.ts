import { Component, OnInit } from '@angular/core';
import {DBService} from './services/db.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-farms',
  template: `
    <ul>
      
      <li *ngFor="let f of farmdb"><a [routerLink]="['farm/1']">{{f.farm}}</a></li>
                 
    </ul>
  `,
  styles: []
})
export class FarmsComponent implements OnInit {
  farmdb;
  i=1;
  constructor(private dbs : DBService) { }

  ngOnInit() {
    this.farmdb = this.dbs.getData();
  }

}
