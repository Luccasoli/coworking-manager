import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarItensDeConsumoComponent } from './cadastrar-itens-de-consumo.component';

describe('CadastrarItensDeConsumoComponent', () => {
  let component: CadastrarItensDeConsumoComponent;
  let fixture: ComponentFixture<CadastrarItensDeConsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarItensDeConsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarItensDeConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
