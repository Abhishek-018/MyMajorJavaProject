import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrganizerBookingComponent } from './view-organizer-booking.component';

describe('ViewOrganizerBookingComponent', () => {
  let component: ViewOrganizerBookingComponent;
  let fixture: ComponentFixture<ViewOrganizerBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrganizerBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOrganizerBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
