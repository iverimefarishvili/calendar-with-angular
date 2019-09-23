import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  public dateForm: FormGroup;

  @Output() time


  weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  
  viewDate: Date = new Date();

  firstDay: Date = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 1);

  lastDay: Date = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 0);

  state: Date[] = [];

  lastDayOfNew: Date = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 0);

  suitableday: Date = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), (this.lastDay.getDate()-this.firstDay.getDate())-this.viewDate.getDay());

  newDate: Date = new Date();

  

  ngOnInit() {

    this.time = this.viewDate.getFullYear() + '-' + (this.viewDate.getMonth()+1) + '-'
    + this.viewDate.getDate();
    this.viewDate.setMonth(this.viewDate.getMonth());
    this.newDate.setMonth(this.viewDate.getMonth()-1);
    this.suitableday = new Date(this.newDate.getFullYear(), this.newDate.getMonth(), (this.lastDay.getDate()-this.correctWeekIndex(this.firstDay)+1)); 
    this.lastDayOfNew = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth()+1, 0);
    console.log(this.lastDayOfNew.getDate());

    for(let i=0;i<this.correctWeekIndex(this.firstDay);i++) {
        this.state.push(new Date(this.suitableday));
        this.suitableday.setDate(this.suitableday.getDate()+1);
    }
    

    





    for(let _item =  this.firstDay.getDate(); _item<=this.lastDayOfNew.getDate(); _item++) {
      
      //this.state = [
      //  ...this.state,
      //  {this.firstDay}
      //]
        
      //console.log(this.firstDay);
      this.state.push(new Date(this.firstDay));
      //console.log(this.state);
      //this.state.push(this.firstDay);
    
      this.firstDay.setDate(this.firstDay.getDate()+1);
    }
    // this.state.map( item => {
    //   console.log(item);
    // })
    
    //console.log(this.state)
  }

  next() {

    this.state = [];




    this.viewDate.setMonth(this.viewDate.getMonth()+1);

    this.firstDay = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 1);

    this.lastDay = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 0);

    

    this.lastDayOfNew = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth()+1, 0);

    this.newDate.setMonth(this.viewDate.getMonth());
    this.lastDay = new Date(this.newDate.getFullYear(), this.newDate.getMonth(), 0);
    this.suitableday = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth()-1, (this.lastDay.getDate()-this.correctWeekIndex(this.firstDay)+1)); 

    
    console.log(this.lastDay.getDate());

    console.log(this.correctWeekIndex(this.firstDay));

    for(let i=0;i<this.correctWeekIndex(this.firstDay);i++) {
        this.state.push(new Date(this.suitableday));

        this.suitableday.setDate(this.suitableday.getDate()+1);
    }

    

    

    for(let _item =  this.firstDay.getDate(); _item<=this.lastDayOfNew.getDate(); _item++) {
      
      this.state.push(new Date(this.firstDay));

      this.firstDay.setDate(this.firstDay.getDate()+1);
    }

    //this.state.map( item => {
    //  console.log(item);
    //})
  }

  
  previous() {
    this.state = [];

    this.viewDate.setMonth(this.viewDate.getMonth()-1);

    this.firstDay = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 1);

    this.lastDayOfNew = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth()+1, 0);


    this.newDate.setMonth(this.viewDate.getMonth());

    this.lastDay = new Date(this.newDate.getFullYear(), this.newDate.getMonth(), 0);

    this.suitableday = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth()-1, (this.lastDay.getDate()-this.correctWeekIndex(this.firstDay)+1)); 
    
    console.log(this.lastDayOfNew.getDate())
    console.log(this.lastDayOfNew);
    
    for(let i=0;i<this.correctWeekIndex(this.firstDay);i++) {
        this.state.push(new Date(this.suitableday));

        this.suitableday.setDate(this.suitableday.getDate()+1);
    }



    for(let _item =  this.firstDay.getDate(); _item<=this.lastDayOfNew.getDate(); _item++) {
      this.state.push(new Date(this.firstDay));

      this.firstDay.setDate(this.firstDay.getDate()+1);
    }

    // this.state.map( item => {
    //   console.log(item);
    // })
  }

  private correctWeekIndex(date: Date): number {
    return (date.getDay() + 6)%7;
  }


  onclick(item: any) {
    this.time = item.getFullYear() + '-' + (item.getMonth()+1) + '-'
    + item.getDate();

    
  }
  
}
