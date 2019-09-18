import { Component, OnInit, ɵConsole } from '@angular/core';
import {
  getSeconds,
  getMinutes,
  getHours,
  getDate,
  getMonth,
  getYear,
  setSeconds,
  setMinutes,
  setHours,
  setDate,
  setMonth,
  setYear,
  getDaysInMonth
} from 'date-fns';
import {
  CalendarView
} from 'angular-calendar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  state: any [] = [];

  dateType: {
    day: number,
    month: number,
    year: number
  };
  
  viewDate: Date = new Date();

  ngOnInit() {
    
    for(var _i = 1; _i <= getDaysInMonth(this.viewDate); _i++) {

      this.dateType = {
        day: _i,
        month: getMonth(this.viewDate) + 1,
        year: getYear(this.viewDate)
      }

      this.state.push(this.dateType);
    }
    this.state.map(item => {
      console.log(item);
    })
  }
    
  
}
