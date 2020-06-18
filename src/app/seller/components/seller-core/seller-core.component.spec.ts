import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerCoreComponent } from './seller-core.component';

describe('SellerCoreComponent', () => {
  let component: SellerCoreComponent;
  let fixture: ComponentFixture<SellerCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
