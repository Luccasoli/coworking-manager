import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPlanoComponent } from './cadastrar-plano.component';

describe('CadastrarPlanoComponent', () => {
  let component: CadastrarPlanoComponent;
  let fixture: ComponentFixture<CadastrarPlanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarPlanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
