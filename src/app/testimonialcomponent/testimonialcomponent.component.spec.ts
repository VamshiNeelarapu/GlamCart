import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialcomponentComponent } from './testimonialcomponent.component';

describe('TestimonialcomponentComponent', () => {
  let component: TestimonialcomponentComponent;
  let fixture: ComponentFixture<TestimonialcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonialcomponentComponent]
    });
    fixture = TestBed.createComponent(TestimonialcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
