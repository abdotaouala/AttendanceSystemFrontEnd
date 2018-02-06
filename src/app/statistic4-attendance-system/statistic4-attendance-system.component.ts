import { Component, OnInit } from '@angular/core';
import {StatisticAttehdanceSystemService} from '../statistic-attehdance-system.service';
import 'rxjs/Rx';
import 'rxjs/Rx';
import {Router} from '@angular/router';
@Component({
  selector: 'app-statistic4-attendance-system',
  templateUrl: './statistic4-attendance-system.component.html',
  styleUrls: ['./statistic4-attendance-system.component.css']
})
export class Statistic4AttendanceSystemComponent implements OnInit {

  page:number=0;
  size:number=5;
  users:any;
  detailsUser:any;
  constructor(private stcASService:StatisticAttehdanceSystemService,private route:Router) { }

  ngOnInit() {
    this.stcASService.getAllUSer(this.page,this.size).subscribe(resp=>{
        this.users=resp;
    })
  }

  onDetailsUers(user){
    this.stcASService.getAllPshRaw(user,this.page,this.size).subscribe(resp=>{
      this.detailsUser=resp;
      console.log(resp)
    })
  }
}
