import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarItensDeServicoComponent } from './listar-itens-de-servico.component';

describe('ListarItensDeServicoComponent', () => {
  let component: ListarItensDeServicoComponent;
  let fixture: ComponentFixture<ListarItensDeServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarItensDeServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarItensDeServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
