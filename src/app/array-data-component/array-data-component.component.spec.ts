import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayDataComponentComponent } from './array-data-component.component';

describe('ArrayDataComponentComponent', () => {
  let component: ArrayDataComponentComponent;
  let fixture: ComponentFixture<ArrayDataComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrayDataComponentComponent]
    });
    fixture = TestBed.createComponent(ArrayDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
