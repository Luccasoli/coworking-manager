import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarStartComponent } from './nav-bar-start.component';

describe('NavBarStartComponent', () => {
  let component: NavBarStartComponent;
  let fixture: ComponentFixture<NavBarStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
