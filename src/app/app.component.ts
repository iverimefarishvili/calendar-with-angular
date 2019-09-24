import { Component, OnInit, ViewChild, ElementRef, Output, HostListener } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  //@HostListener('myinput', ['$event'])
  //handleKeyboardEvent(event: KeyboardEvent) {
  //  alert('Key was pressed');
  //}

  public dateForm: FormGroup;

  @ViewChild("myInput", {static: false}) divView: ElementRef;

  @ViewChild("element", {static: false}) item: ElementRef;

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
    + this.viewDate.getDate();
    //this.divView.nativeElement.value = this.viewDate.getFullYear() + '-' + (this.viewDate.getMonth()+1) + '-';
    //this.viewDate = new Date(this.divView.nativeElement.value);


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

  
  isActive = false;

  onclick(item: any) {
    
    
    item.isActive = !item.isActive;
    
    this.time = item.getFullYear() + '-' + (item.getMonth()+1) + '-'
    + item.getDate();
   
  }


  findDate() {
    
    this.viewDate = new Date(this.divView.nativeElement.value);
    
    


    this.state = [];




    this.viewDate.setMonth(this.viewDate.getMonth());

    this.firstDay = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 1);

    this.lastDay = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 0);

    

    this.lastDayOfNew = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth()+1, 0);

    this.newDate.setMonth(this.viewDate.getMonth());
    this.lastDay = new Date(this.newDate.getFullYear(), this.newDate.getMonth(), 0);
    this.suitableday = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth()-1, (this.lastDay.getDate()-this.correctWeekIndex(this.firstDay)+1)); 


    for(let i=0;i<this.correctWeekIndex(this.firstDay);i++) {
        this.state.push(new Date(this.suitableday));

        this.suitableday.setDate(this.suitableday.getDate()+1);
    }

    

    

    for(let _item =  this.firstDay.getDate(); _item<=this.lastDayOfNew.getDate(); _item++) {
      
      this.state.push(new Date(this.firstDay));

      this.firstDay.setDate(this.firstDay.getDate()+1);
    }

    this.state.map(element => {
        var date = new Date(element);
        var result = date.toLocaleDateString("en-GB", { 
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        });
        var date2 = new Date(this.divView.nativeElement.value);
        var result2 = date2.toLocaleDateString("en-GB", { 
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        });

      console.log(result);
      console.log(result2);
      if(result2 == result) {
        this.onclick(element);
      }
    })
  }
  
}
