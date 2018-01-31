import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class StatisticAttehdanceSystemService {

  constructor(private http:Http) { }

  getAllUSer(page,size){
    this.http.get("")
  }

  getAllPshRaw(user,page,size){
    this.http.get(""+user)
  }

}
