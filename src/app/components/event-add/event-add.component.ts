import { Component, OnInit } from '@angular/core';
import {EventManageService} from '../../event-manage.service';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css'],
  providers: [ EventManageService ]
})
export class EventAddComponent implements OnInit {
  eventTime: string;
  eventName: string;
  eventArray: string;
  allEvents: any;

  constructor(private eventManageService: EventManageService) {} // here we call the services

  ngOnInit(): void {
    this.eventManageService.getInstance().subscribe(value => {
      console.log(value);
      this.allEvents = value;
    });
  }

  getEventNameAndTime() {
    this.eventManageService.addEvent(this.eventTime, this.eventName);
  }

  submitEvent() {
    this.getEventNameAndTime();
  }

  // getEventList() {
  //   const val = JSON.stringify(this.eventManageService.getEventList());
  //   this.eventArray = val;
  //   console.log(val);
  // }
}
