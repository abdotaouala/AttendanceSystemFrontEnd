import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AttendanceSystemComponent } from './attendance-system/attendance-system.component';
import { Statistic4AttendanceSystemComponent } from './statistic4-attendance-system/statistic4-attendance-system.component';
import {RoutingModule} from './routing/routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AttendanceSystemComponent,
    Statistic4AttendanceSystemComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
