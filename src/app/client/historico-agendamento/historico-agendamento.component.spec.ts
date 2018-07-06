import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoAgendamentoComponent } from './historico-agendamento.component';

describe('HistoricoAgendamentoComponent', () => {
  let component: HistoricoAgendamentoComponent;
  let fixture: ComponentFixture<HistoricoAgendamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoAgendamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
