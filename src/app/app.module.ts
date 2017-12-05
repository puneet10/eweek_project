import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import * as $ from 'jquery';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import {FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { InboxComponent } from './inbox/inbox.component';
import { EventsComponent } from './events/events.component';
import { NewsComponent } from './news/news.component';
import { CollegelistComponent } from './collegelist/collegelist.component';
import { ImgvidComponent } from './imgvid/imgvid.component';
import { CalenderComponent } from './calender/calender.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { RegisterComponent } from './events/register/register.component';

const eweek: Routes = [
  {path: '' , component: MainComponent},
  {path: 'app-first' , component: FirstComponent },
  {path: 'app-inbox' , component: InboxComponent },
  {path: 'app-events' , component: EventsComponent },
  {path: 'app-news' , component: NewsComponent },
  {path: 'app-collegelist' , component: CollegelistComponent },
  {path: 'app-imgvid' , component: ImgvidComponent },
  {path: 'app-calender' , component: CalenderComponent },
  {path: 'app-sidebar' , component: SidebarComponent },
  {path: 'app-register' , component: RegisterComponent },

] ;
  @NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    MainComponent,
    InboxComponent,
    EventsComponent,
    NewsComponent,
    CollegelistComponent,
    ImgvidComponent,
    CalenderComponent,
    SidebarComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, ChartsModule, RouterModule.forRoot(eweek), AlertModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
