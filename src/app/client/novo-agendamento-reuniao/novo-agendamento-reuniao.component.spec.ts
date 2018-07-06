import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoAgendamentoReuniaoComponent } from './novo-agendamento-reuniao.component';

describe('NovoAgendamentoReuniaoComponent', () => {
  let component: NovoAgendamentoReuniaoComponent;
  let fixture: ComponentFixture<NovoAgendamentoReuniaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoAgendamentoReuniaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoAgendamentoReuniaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
