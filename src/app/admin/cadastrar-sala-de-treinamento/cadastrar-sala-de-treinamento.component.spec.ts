import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarSalaDeTreinamentoComponent } from './cadastrar-sala-de-treinamento.component';

describe('CadastrarSalaDeTreinamentoComponent', () => {
  let component: CadastrarSalaDeTreinamentoComponent;
  let fixture: ComponentFixture<CadastrarSalaDeTreinamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarSalaDeTreinamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarSalaDeTreinamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
