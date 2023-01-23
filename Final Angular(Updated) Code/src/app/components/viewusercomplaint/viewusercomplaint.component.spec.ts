import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewusercomplaintComponent } from './viewusercomplaint.component';

describe('ViewusercomplaintComponent', () => {
  let component: ViewusercomplaintComponent;
  let fixture: ComponentFixture<ViewusercomplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewusercomplaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewusercomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
