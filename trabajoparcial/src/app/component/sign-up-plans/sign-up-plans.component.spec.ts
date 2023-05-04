import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPlansComponent } from './sign-up-plans.component';

describe('SignUpPlansComponent', () => {
  let component: SignUpPlansComponent;
  let fixture: ComponentFixture<SignUpPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpPlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
