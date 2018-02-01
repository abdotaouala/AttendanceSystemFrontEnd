import { Component, OnInit } from '@angular/core';
import {User} from '../model/User';
import {AttendanceSystemService} from '../attendance-system.service';

@Component({
  selector: 'app-attendance-system',
  templateUrl: './attendance-system.component.html',
  styleUrls: ['./attendance-system.component.css']
})
export class AttendanceSystemComponent implements OnInit {
  buttonColor:string="black"
  name:string;
  typeLeave:number;
  constructor(private user:User,private attendanceSystemService:AttendanceSystemService) {
    this.name=user.getName()
  }

  ngOnInit() {
  }
  onAttendance(){

    console.log(this.typeLeave)
    console.log("changeColor")
    //1
    if(this.buttonColor=="yellow"){
      let a:number=1;
      this.attendanceSystemService.openCloseAttendance(a,this.name)
      this.buttonColor="black"
    }
    //2
    else
      this.attendanceSystemService.openCloseAttendance(1,this.name)
      this.buttonColor="yellow"
  }
}
