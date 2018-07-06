import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoAgendamentoExclusivaComponent } from './novo-agendamento-exclusiva.component';

describe('NovoAgendamentoExclusivaComponent', () => {
  let component: NovoAgendamentoExclusivaComponent;
  let fixture: ComponentFixture<NovoAgendamentoExclusivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoAgendamentoExclusivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoAgendamentoExclusivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
