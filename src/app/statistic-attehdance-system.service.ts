import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import  "rxjs/add/operator/map";
@Injectable()
export class StatisticAttehdanceSystemService {

  constructor(private http:Http) { }

  getAllUSer(page,size){
    return this.http.get("http://localhost:8080/listeUsers").map(resp=>resp.json())
  }

  getAllPshRaw(user,page,size){
    return this.http.get("http://localhost:8080/chercher/?name="+user).map(resp=>resp.json())
  }

}
