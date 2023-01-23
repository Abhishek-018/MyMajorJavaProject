import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbookingsComponent } from './editbookings.component';

describe('EditbookingsComponent', () => {
  let component: EditbookingsComponent;
  let fixture: ComponentFixture<EditbookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditbookingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
