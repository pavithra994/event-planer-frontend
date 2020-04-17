import { TestBed } from '@angular/core/testing';

import { EventManageService } from './event-manage.service';

describe('EventManageService', () => {
  let service: EventManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
