import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoMateriaisDeConsumoComponent } from './novo-materiais-de-consumo.component';

describe('NovoMateriaisDeConsumoComponent', () => {
  let component: NovoMateriaisDeConsumoComponent;
  let fixture: ComponentFixture<NovoMateriaisDeConsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoMateriaisDeConsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoMateriaisDeConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
