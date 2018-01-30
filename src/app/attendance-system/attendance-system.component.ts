import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance-system',
  templateUrl: './attendance-system.component.html',
  styleUrls: ['./attendance-system.component.css']
})
export class AttendanceSystemComponent implements OnInit {
  buttonColor:string="black"
  constructor() { }

  ngOnInit() {
  }
  onAttendance(){
    console.log("changeColor")
    if(this.buttonColor=="yellow")
    this.buttonColor="black"
    else
      this.buttonColor="yellow"
  }
}
