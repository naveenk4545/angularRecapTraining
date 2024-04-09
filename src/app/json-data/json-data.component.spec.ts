import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonDataComponent } from './json-data.component';

describe('JsonDataComponent', () => {
  let component: JsonDataComponent;
  let fixture: ComponentFixture<JsonDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonDataComponent]
    });
    fixture = TestBed.createComponent(JsonDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
