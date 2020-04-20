import { Component, OnInit } from '@angular/core';
import {MatCalendarCellCssClasses} from '@angular/material/datepicker';
import {EventManageService} from '../../event-manage.service';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.css']
})
export class EventCalendarComponent implements OnInit {
  selectedDate: any;
  eventArray;
  datesToHighlight = ['2020/04/26',
    '2020/04/26',
    '2020/04/26',
    ];
  constructor(private eventManageService: EventManageService) { }

  ngOnInit(): void {
    this.eventManageService.getInstance().subscribe(value => {
      console.log(value);
      this.eventArray = value;
    });
  }

  dateClass() {
    // tslint:disable-next-line:variable-name
    return (date_m: Date): MatCalendarCellCssClasses => {
      const date = new Date(date_m)
      // const highlightDate = this.datesToHighlight
      //   .map(strDate => new Date(strDate))
      //   .some(d => d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear());
      const highlightDate = this.eventManageService.getEventList()
        .map(strDate => strDate.eventTime)
        .some(d => d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear());
      return highlightDate ? 'special-date' : '';
    };
  }
}
