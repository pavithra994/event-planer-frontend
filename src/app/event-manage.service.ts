import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class EventManageService {
  private eventArray: Array<any> = [];

  // @ts-ignore
  private eventSource = new BehaviorSubject<Array>(this.eventArray);
  // currentEventList = this.eventSource.asObservable();
  constructor() { }

  getInstance(){
    return this.eventSource;
  }
  // tslint:disable-next-line:variable-name
  addEvent(event_time: any, event_name: string){
    const eventData = {
      eventName: event_name,
      eventTime: new Date(event_time)
    };
    this.eventArray.push(eventData);
    this.eventSource.next(this.eventArray);
  }

  getEventList(){
    return this.eventArray;
  }
}
