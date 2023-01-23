import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrganizerProfileComponent } from './update-organizer-profile.component';

describe('UpdateOrganizerProfileComponent', () => {
  let component: UpdateOrganizerProfileComponent;
  let fixture: ComponentFixture<UpdateOrganizerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOrganizerProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOrganizerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
