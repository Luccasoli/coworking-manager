import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoMateriaisDeConsumoComponent } from './historico-materiais-de-consumo.component';

describe('HistoricoMateriaisDeConsumoComponent', () => {
  let component: HistoricoMateriaisDeConsumoComponent;
  let fixture: ComponentFixture<HistoricoMateriaisDeConsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoMateriaisDeConsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoMateriaisDeConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
