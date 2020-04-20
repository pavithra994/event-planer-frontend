import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMomentDateModule } from '@angular/material-moment-adapter';


// import { MatDatepickerModule,
//   MatNativeDateModule,
//   MatFormFieldModule,
//   MatInputModule } from '@angular/material';


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
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatMomentDateModule
  ],
  exports: [
    MatDatepickerModule
  ],
  providers: [ EventManageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
