import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerToolbarComponent } from './organizer-toolbar.component';

describe('OrganizerToolbarComponent', () => {
  let component: OrganizerToolbarComponent;
  let fixture: ComponentFixture<OrganizerToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizerToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizerToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
