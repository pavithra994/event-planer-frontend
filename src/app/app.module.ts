import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {EventCalendarComponent} from './components/event-calendar/event-calendar.component';
import {EventAddComponent} from './components/event-add/event-add.component';
import {FormsModule} from '@angular/forms';
import {EventListComponent} from './components/event-list/event-list.component';
import {EventManageService} from './event-manage.service';

@NgModule({
  declarations: [
    AppComponent,
    EventCalendarComponent,
    EventAddComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ EventManageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
