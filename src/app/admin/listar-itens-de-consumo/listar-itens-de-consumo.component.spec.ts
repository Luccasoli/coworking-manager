import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarItensDeConsumoComponent } from './listar-itens-de-consumo.component';

describe('ListarItensDeConsumoComponent', () => {
  let component: ListarItensDeConsumoComponent;
  let fixture: ComponentFixture<ListarItensDeConsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarItensDeConsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarItensDeConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
