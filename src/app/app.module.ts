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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AttendanceSystemComponent,
    Statistic4AttendanceSystemComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
