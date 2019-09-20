import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
 

  weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  
  viewDate: Date = new Date();

  firstDay: Date = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 1);

  lastDay: Date = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() + 1, 0);

  state: any [] = [];



  suitableday: Date = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), (this.lastDay.getDate()-this.firstDay.getDate())-this.viewDate.getDay());

  newDate: Date = new Date();

  ngOnInit() {



    this.newDate.setMonth(this.viewDate.getMonth()-1);

    this.suitableday = new Date(this.newDate.getFullYear(), this.newDate.getMonth(), (this.lastDay.getDate()-this.firstDay.getDate())-this.viewDate.getDay()+2);

    
    console.log(this.viewDate.getDay());

    for(let i=0;i<=this.viewDate.getDay();i++) {
        this.state.push(new Date(this.suitableday));

        this.suitableday.setDate(this.suitableday.getDate()+1);
    }
    

    





    for(let _item =  this.firstDay.getDate(); _item<=this.lastDay.getDate(); _item++) {
      
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
    this.state.map( item => {
      console.log(item);
    })
    
    //console.log(this.state)
  }

  next() {

    this.state = [];




    this.viewDate.setMonth(this.viewDate.getMonth()+1);

    this.firstDay = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 1);

    this.lastDay = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() + 1, 0);





    this.newDate.setMonth(this.viewDate.getMonth()-1);


    this.suitableday = new Date(this.newDate.getFullYear(), this.newDate.getMonth(), (this.lastDay.getDate()-this.firstDay.getDate())-this.viewDate.getDay());

    
    console.log(this.viewDate.getDay());

    for(let i=0;i<=this.viewDate.getDay();i++) {
        this.state.push(new Date(this.suitableday));

        this.suitableday.setDate(this.suitableday.getDate()+1);
    }

    

    

    for(let _item =  this.firstDay.getDate(); _item<=this.lastDay.getDate(); _item++) {
      
      this.state.push(new Date(this.firstDay));

      this.firstDay.setDate(this.firstDay.getDate()+1);
    }

    this.state.map( item => {
      console.log(item);
    })
  }

  
  previous() {
    this.state = [];

    this.viewDate.setMonth(this.viewDate.getMonth()-1);

    this.firstDay = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 1);

    this.lastDay = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() + 1, 0);



    this.newDate.setMonth(this.viewDate.getMonth()-1);

    this.suitableday = new Date(this.newDate.getFullYear(), this.newDate.getMonth(), (this.lastDay.getDate()-this.firstDay.getDate())-this.viewDate.getDay());

    
    console.log(this.viewDate.getDay());

    for(let i=0;i<=this.viewDate.getDay();i++) {
        this.state.push(new Date(this.suitableday));

        this.suitableday.setDate(this.suitableday.getDate()+1);
    }



    for(let _item =  this.firstDay.getDate(); _item<=this.lastDay.getDate(); _item++) {
      this.state.push(new Date(this.firstDay));

      this.firstDay.setDate(this.firstDay.getDate()+1);
    }

    this.state.map( item => {
      console.log(item.getDay());
    })
  }
  
}
