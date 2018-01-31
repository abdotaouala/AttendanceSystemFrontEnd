import { Component, OnInit } from '@angular/core';
import {User} from '../model/User';

@Component({
  selector: 'app-attendance-system',
  templateUrl: './attendance-system.component.html',
  styleUrls: ['./attendance-system.component.css']
})
export class AttendanceSystemComponent implements OnInit {
  buttonColor:string="black"
  name:string;
  typeLeave:number;
  constructor(private user:User) {
    this.name=user.getName()
  }

  ngOnInit() {
  }
  onAttendance(){
    console.log(this.typeLeave)
    console.log("changeColor")
    if(this.buttonColor=="yellow"){

      this.buttonColor="black"
    }

    else
      this.buttonColor="yellow"
  }
}
