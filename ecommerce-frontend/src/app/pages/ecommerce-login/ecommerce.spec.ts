import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceLoginComponent } from './ecommerce.component';

describe('EcommerceLoginComponent', () => {
  let component: EcommerceLoginComponent;
  let fixture: ComponentFixture<EcommerceLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcommerceLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
