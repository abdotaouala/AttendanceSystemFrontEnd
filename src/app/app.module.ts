import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AttendanceSystemComponent } from './attendance-system/attendance-system.component';
import { Statistic4AttendanceSystemComponent } from './statistic4-attendance-system/statistic4-attendance-system.component';
import {RoutingModule} from './routing/routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {User} from './model/User';
import {AuthGuard} from './auth.guard';
import {AttendanceSystemService} from './attendance-system.service';
import {Http, HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AttendanceSystemComponent,
    Statistic4AttendanceSystemComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [User,AuthGuard,AttendanceSystemService,Http],
  bootstrap: [AppComponent]
})
export class AppModule { }
