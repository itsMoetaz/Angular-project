import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputdetailcategorieComponent } from './inputdetailcategorie.component';

describe('InputdetailcategorieComponent', () => {
  let component: InputdetailcategorieComponent;
  let fixture: ComponentFixture<InputdetailcategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputdetailcategorieComponent]
    });
    fixture = TestBed.createComponent(InputdetailcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
