import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscategorieComponent } from './detailscategorie.component';

describe('DetailscategorieComponent', () => {
  let component: DetailscategorieComponent;
  let fixture: ComponentFixture<DetailscategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailscategorieComponent]
    });
    fixture = TestBed.createComponent(DetailscategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
