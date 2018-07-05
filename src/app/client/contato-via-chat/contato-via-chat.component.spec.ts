import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoViaChatComponent } from './contato-via-chat.component';

describe('ContatoViaChatComponent', () => {
  let component: ContatoViaChatComponent;
  let fixture: ComponentFixture<ContatoViaChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoViaChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoViaChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
