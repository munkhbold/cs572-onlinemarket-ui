import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductReviewsComponent } from './admin-product-reviews.component';

describe('AdminProductReviewsComponent', () => {
  let component: AdminProductReviewsComponent;
  let fixture: ComponentFixture<AdminProductReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
