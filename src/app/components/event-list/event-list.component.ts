import { Component, OnInit } from '@angular/core';
import {EventManageService} from '../../event-manage.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [ EventManageService ]

})
export class EventListComponent implements OnInit {
  eventArray;

  constructor(private eventManageService: EventManageService) { }

  ngOnInit(): void {
    this.eventManageService.getInstance().subscribe(value => {
      console.log(value);
    });
  }
  updateEventList(){
    this.eventManageService.getInstance().subscribe(value => {
      console.log(value);
    });
    this.eventArray = this.eventManageService.getEventList();
    console.log(this.eventArray);

  }
}
