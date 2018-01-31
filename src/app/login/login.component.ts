import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:string="";
  error:string=""
  constructor(private router:Router,private user:User) { }

  ngOnInit() {
  }

  onlogin(){
    if(this.name=="taouala"){
      console.log(this.name)
      this.user.setIsLogin()
      this.router.navigate(['/attendanceSystem'])
    }else{
      this.error="Error : User "+this.name+" Not Found"
    }
    }

}
