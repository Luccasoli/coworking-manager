import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturasPassadasComponent } from './faturas-passadas.component';

describe('FaturasPassadasComponent', () => {
  let component: FaturasPassadasComponent;
  let fixture: ComponentFixture<FaturasPassadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaturasPassadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturasPassadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
