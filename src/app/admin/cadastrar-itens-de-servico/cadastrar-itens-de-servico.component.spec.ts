import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarItensDeServicoComponent } from './cadastrar-itens-de-servico.component';

describe('CadastrarItensDeServicoComponent', () => {
  let component: CadastrarItensDeServicoComponent;
  let fixture: ComponentFixture<CadastrarItensDeServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarItensDeServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarItensDeServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
