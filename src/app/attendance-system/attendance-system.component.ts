import { Component, OnInit } from '@angular/core';
import {User} from '../model/User';
import {AttendanceSystemService} from '../attendance-system.service';
import {Router} from "@angular/router";
import * as $ from 'jquery';

@Component({
  selector: 'app-attendance-system',
  templateUrl: './attendance-system.component.html',
  styleUrls: ['./attendance-system.component.css']
})
export class AttendanceSystemComponent implements OnInit {
  buttonColor:string='black';
  name:string;
  id;
  typeLeave:number;
  constructor(private user:User,private attendanceSystemService:AttendanceSystemService,private router:Router) {
    this.name=user.getName()
    this.id=user.getId()
  }

  ngOnInit() {
  }
  onAttendance(){

    //1
    if(this.buttonColor=='yellow'){
      document.getElementById("btnexampleModalLong").click();
    }
    //2
    else if(this.buttonColor=='black'){
      this.attendanceSystemService.openCloseAttendance(2,this.id,0);
      this.buttonColor='yellow';
    }
  }
  oncancel(){
    this.buttonColor='yellow';
  }
  onValid(){
    this.attendanceSystemService.openCloseAttendance(1,this.id,this.typeLeave);
    this.buttonColor='black';

  }
}
