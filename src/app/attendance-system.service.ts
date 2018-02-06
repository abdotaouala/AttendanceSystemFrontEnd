import { Injectable } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import  "rxjs/add/operator/map";

@Injectable()
export class AttendanceSystemService {

  constructor(private http:Http) { }

  openCloseAttendance(val,user,type){
    this.http.post("http:/localhost:8080/attendance/?id="+user+"&val="+val+"&type="+type,{})
  }
  login(name){
    return this.http.get("http://localhost:8080/searchUsers/?name="+name).map(resp=>resp.json())
  }

}
