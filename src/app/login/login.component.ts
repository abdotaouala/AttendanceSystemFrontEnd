import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../model/User';
import {AttendanceSystemService} from '../attendance-system.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:string;
  error:string="";
  usr:any;
  constructor(private router:Router,private user:User,private attendanceSystem:AttendanceSystemService) { }

  ngOnInit() {
  }

  onlogin(){
    console.log("*****************************")
    console.log(this.name)
    this.attendanceSystem.login(this.name).subscribe(resp=>{

        if(resp.content[0]){
        this.user.setIsLogin()
        this.user.setName(this.name)
          this.user.setId(resp.content[0].id)
        this.router.navigate(['/attendanceSystem'])
      }else{
        this.error="Error : User "+this.name+" Not Found"
      }
    })


    }

}
