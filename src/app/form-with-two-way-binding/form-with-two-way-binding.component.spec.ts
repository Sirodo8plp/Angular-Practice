import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithTwoWayBindingComponent } from './form-with-two-way-binding.component';

describe('FormWithTwoWayBindingComponent', () => {
  let component: FormWithTwoWayBindingComponent;
  let fixture: ComponentFixture<FormWithTwoWayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWithTwoWayBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
