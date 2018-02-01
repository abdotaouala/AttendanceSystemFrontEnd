import { Injectable } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import  "rxjs/add/operator/map";

@Injectable()
export class AttendanceSystemService {

  constructor(private http:Http) { }

  openCloseAttendance(val,user){
    return this.http.put("localhost:8080/attendance"+user,val)
  }
  login(name){
    return this.http.get("http://localhost:8080/searchUsers/?name="+name).map(resp=>resp.json())
  }

}
