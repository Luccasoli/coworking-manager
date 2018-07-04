import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarSalaDeReuniaoComponent } from './cadastrar-sala-de-reuniao.component';

describe('CadastrarSalaDeReuniaoComponent', () => {
  let component: CadastrarSalaDeReuniaoComponent;
  let fixture: ComponentFixture<CadastrarSalaDeReuniaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarSalaDeReuniaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarSalaDeReuniaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
