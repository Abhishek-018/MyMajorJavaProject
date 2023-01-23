import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEventComponent } from './navbar-event.component';

describe('NavbarEventComponent', () => {
  let component: NavbarEventComponent;
  let fixture: ComponentFixture<NavbarEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
