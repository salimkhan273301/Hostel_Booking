import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAvailableComponent } from './feature-available.component';

describe('FeatureAvailableComponent', () => {
  let component: FeatureAvailableComponent;
  let fixture: ComponentFixture<FeatureAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureAvailableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
