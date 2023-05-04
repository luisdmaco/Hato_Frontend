import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpRegisterComponent } from './sign-up-register.component';

describe('SignUpRegisterComponent', () => {
  let component: SignUpRegisterComponent;
  let fixture: ComponentFixture<SignUpRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
