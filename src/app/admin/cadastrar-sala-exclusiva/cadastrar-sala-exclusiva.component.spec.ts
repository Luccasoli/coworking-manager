import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarSalaExclusivaComponent } from './cadastrar-sala-exclusiva.component';

describe('CadastrarSalaExclusivaComponent', () => {
  let component: CadastrarSalaExclusivaComponent;
  let fixture: ComponentFixture<CadastrarSalaExclusivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarSalaExclusivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarSalaExclusivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
