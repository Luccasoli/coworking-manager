import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPfPjComponent } from './signup-pf-pj.component';

describe('SignupPfPjComponent', () => {
  let component: SignupPfPjComponent;
  let fixture: ComponentFixture<SignupPfPjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupPfPjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPfPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
