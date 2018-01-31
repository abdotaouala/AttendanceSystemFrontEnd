import { Injectable } from '@angular/core';
import {Http, HttpModule} from '@angular/http';

@Injectable()
export class AttendanceSystemService {

  constructor(private http:Http) { }

  openCloseAttendance(val,user){
    return this.http.put("",val)
  }
  login(name,user){
    return this.http.get(""+name)
  }

}
