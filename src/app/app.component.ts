import { Component, OnInit, ViewChild, ElementRef, Output, HostListener, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

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

  years = []; 

  days = [];

  months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']


  weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  
  viewDate: Date = new Date();

  firstDay: Date = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 1);

  lastDay: Date = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 0);

  state: Date[] = [];

  lastDayOfNew: Date = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 0);

  suitableday: Date = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), (this.lastDay.getDate()-this.firstDay.getDate())-this.viewDate.getDay());

  newDate: Date = new Date();

  first = 1900;

  firstd = 1;


  ngOnInit() {
    for(let a = 0; a<=200; a++) {
      this.years.push(this.first);
      this.first++;
    }
    for(let a = 0; a<31; a++) {
      this.days.push(this.firstd);
      this.firstd++;
    }
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


  findDate(year, month, day) {
    
    this.viewDate = new Date(year, month, day);
    
    


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
        var date2 = new Date(this.viewDate);
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
  iserror = false;
  input1 = 0;


  onKeydown(event) {
    
    if(event.target.value>=0 || event.target.value<=9 || event.target.value.toString().includes('/')) {
      this.iserror = false;
      if(event.target.value.toString().length == 2) {
        this.input1 = event.target.value;
        if(this.input1>12) {
          this.input1 = 12;
          
        } else {
          
        }
        event.target.value = this.input1 + '/';
      }
      if(event.target.value.toString().length == 5) {
        
        let input2 = event.target.value.toString()[3]+event.target.value.toString()[4]
        if(input2>31) {
          input2 = '0' + input2[0]+'/';;
        }else {
          input2 = input2 + '/';
        }
        
        event.target.value = this.input1 + '/' + input2;
      }
      
    } else {
      event.target.value = "";
      this.iserror = true;
    }

  }
  
  year = 2019;
  monthh = 1;
  day = 1;


  onChange(event) {
    console.log(event.target.name);
    if(event.target.name == 'DOBYear') {
      this.year = event.target.value;
    }
    if(event.target.name == 'DOBMonth') {
      this.monthh = event.target.value;
    }
    if(event.target.name == 'DOBDay') {
      this.day = event.target.value;
    }

    console.log(this.year, this.monthh, this.day);
    this.findDate(this.year, this.monthh, this.day);
  }
 
}
