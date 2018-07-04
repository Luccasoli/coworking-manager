import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSalasComponent } from './menu-salas.component';

describe('MenuSalasComponent', () => {
  let component: MenuSalasComponent;
  let fixture: ComponentFixture<MenuSalasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSalasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
