import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarClientComponent } from './nav-bar-client.component';

describe('NavBarClientComponent', () => {
  let component: NavBarClientComponent;
  let fixture: ComponentFixture<NavBarClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
