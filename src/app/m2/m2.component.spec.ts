import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M2Component } from './m2.component';

describe('M2Component', () => {
  let component: M2Component;
  let fixture: ComponentFixture<M2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [M2Component]
    });
    fixture = TestBed.createComponent(M2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
