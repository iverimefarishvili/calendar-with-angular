import { Component, OnInit, ɵConsole, ViewChild } from '@angular/core';

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

  firstDay: Date = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 1);

  ngOnInit() {
    for(var _i = 1; _i <= getDaysInMonth(this.viewDate); _i++) {

      //this.dateType = {
      //  day: _i,
      //  month: getMonth(this.viewDate),
      //  year: getYear(this.viewDate)
      //}

      this.state.push(this.dateType);
    }
    console.log(this.viewDate);
  }

  

  next() {

    this.state = [
    ];

    
    
    this.viewDate.setMonth(this.viewMonth);
    for(var _m = 1; _m <= getMonth(this.viewDate); _m++){

        for(var _i = 1; _i <= getDaysInMonth(this.viewDate); _i++) {
            console.log(_i);

            this.dateType = {
              day: _i,
              month: _m,
              year: getYear(this.viewDate)
            }
        
            this.state.push(this.dateType);
        }
    }
    this.viewMonth++;

    this.state.map(item => {
      console.log(item);
    })
    
    
    

    //this.viewDate.setMonth(x++);

  }

  previous() {
    this.viewDate.setMonth(this.viewMonth);

    this.state = [
    ];

    for(var _i = 1; _i <= getDaysInMonth(this.viewDate); _i++) {
        console.log(_i);

        this.dateType = {
          day: _i,
          month: getMonth(this.viewDate),
          year: getYear(this.viewDate)
        }
    
        this.state.push(this.dateType);
    }
    this.viewMonth--;

    

    this.state.map(item => {
      console.log(item);
    })
  }
    
  
}
