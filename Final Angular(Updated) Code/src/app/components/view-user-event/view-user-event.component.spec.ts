import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserEventComponent } from './view-user-event.component';

describe('ViewUserEventComponent', () => {
  let component: ViewUserEventComponent;
  let fixture: ComponentFixture<ViewUserEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUserEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUserEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
