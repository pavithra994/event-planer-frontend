import {Component, OnInit} from '@angular/core';
// import {EventManageService} from './event-manage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'event-planer-frontend';

  constructor() {}

  ngOnInit(): void{
  }
}
