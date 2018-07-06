import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoAgendamentoTreinamentoComponent } from './novo-agendamento-treinamento.component';

describe('NovoAgendamentoTreinamentoComponent', () => {
  let component: NovoAgendamentoTreinamentoComponent;
  let fixture: ComponentFixture<NovoAgendamentoTreinamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoAgendamentoTreinamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoAgendamentoTreinamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
