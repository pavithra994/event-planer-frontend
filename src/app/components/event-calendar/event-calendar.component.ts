import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCalendarCellCssClasses, MatCalendar } from '@angular/material/datepicker';
import { EventManageService } from '../../event-manage.service';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.css']
})
export class EventCalendarComponent implements OnInit {

  @ViewChild(MatCalendar) calendar;
  selectedDate: any;
  eventArray;
  loadingItem = false;
  constructor(private eventManageService: EventManageService) { }

  ngOnInit(): void {
    this.eventManageService.getInstance().subscribe(value => {
      this.loadingItem = true;
      this.eventArray = value;
      setTimeout(() => {
        this.loadingItem = false;
      }, 100);
    });
  }

  dateClass = (currDate: Date) => {
    const date = new Date(currDate);
    const highlightDate = this.eventArray
      .map(strDate => strDate.eventTime)
      .some(d => d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear());
    return highlightDate ? 'special-date' : '';
  }
}
