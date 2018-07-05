import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaisDeConsumoComponent } from './materiais-de-consumo.component';

describe('MateriaisDeConsumoComponent', () => {
  let component: MateriaisDeConsumoComponent;
  let fixture: ComponentFixture<MateriaisDeConsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaisDeConsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaisDeConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
