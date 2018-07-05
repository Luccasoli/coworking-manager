import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensDeServicoComponent } from './itens-de-servico.component';

describe('ItensDeServicoComponent', () => {
  let component: ItensDeServicoComponent;
  let fixture: ComponentFixture<ItensDeServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItensDeServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItensDeServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
