import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAdministradorComponent } from './cadastrar-administrador.component';

describe('CadastrarAdministradorComponent', () => {
  let component: CadastrarAdministradorComponent;
  let fixture: ComponentFixture<CadastrarAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
