import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelAdminViewComponent } from './hotel-admin-view.component';

describe('HotelAdminViewComponent', () => {
  let component: HotelAdminViewComponent;
  let fixture: ComponentFixture<HotelAdminViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelAdminViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
