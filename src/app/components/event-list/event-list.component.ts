import { Component, OnInit } from '@angular/core';
import {EventManageService} from '../../event-manage.service';
import {MatCalendarCellCssClasses} from '@angular/material/datepicker';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [ ]

})
export class EventListComponent implements OnInit {
  eventArray;

  constructor(private eventManageService: EventManageService) { }

  ngOnInit(): void {
    this.eventManageService.getInstance().subscribe(value => {
      console.log(value);
      this.eventArray = value;
    });
  }
  // updateEventList(){
  //   // this.eventManageService.getInstance().subscribe(value => {
  //   //   console.log(value);
  //   // });
  //   this.eventArray = this.eventManageService.getEventList();
  //   console.log(this.eventArray);
  //
  // }

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
