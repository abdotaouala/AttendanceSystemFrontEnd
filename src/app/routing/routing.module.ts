import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {AttendanceSystemComponent} from '../attendance-system/attendance-system.component';
import {Statistic4AttendanceSystemComponent} from '../statistic4-attendance-system/statistic4-attendance-system.component';
import {HomeComponent} from '../home/home.component';
import {AuthGuard} from '../auth.guard';
const appRoute:Routes=[
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'attendanceSystem',canActivate:[AuthGuard],component:AttendanceSystemComponent},
  {path:'staticticAttendanceSystem',component:Statistic4AttendanceSystemComponent}
]
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(appRoute)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
