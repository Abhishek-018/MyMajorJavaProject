import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizernavbarComponent } from './organizernavbar.component';

describe('OrganizernavbarComponent', () => {
  let component: OrganizernavbarComponent;
  let fixture: ComponentFixture<OrganizernavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizernavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizernavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
