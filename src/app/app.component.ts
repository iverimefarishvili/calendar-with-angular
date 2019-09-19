import { Component, OnInit, ɵConsole, ViewChild } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  state: any [] = [];
  
  viewDate: Date = new Date();

  firstDay: Date = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 1);

  lastDay: Date = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() + 1, 0);

  ngOnInit() {
    for(let _item =  this.firstDay.getDate(); _item<=this.lastDay.getDate(); _item++) {
      console.log(this.firstDay);
      this.firstDay.setDate(this.firstDay.getDate()+1);
    }
  }

  next() {
    this.viewDate.setMonth(this.viewDate.getMonth()+1);

    this.firstDay = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 1);

    this.lastDay = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() + 1, 0);

    for(let _item =  this.firstDay.getDate(); _item<=this.lastDay.getDate(); _item++) {
      console.log(this.firstDay);
      this.firstDay.setDate(this.firstDay.getDate()+1);
    }
  }

  
  previous() {
    this.viewDate.setMonth(this.viewDate.getMonth()-1);

    this.firstDay = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 1);

    this.lastDay = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() + 1, 0);

    for(let _item =  this.firstDay.getDate(); _item<=this.lastDay.getDate(); _item++) {
      console.log(this.firstDay);
      this.firstDay.setDate(this.firstDay.getDate()+1);
    }
  }
  
}
