import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListproduitsComponent } from './listproduits.component';

describe('ListproduitsComponent', () => {
  let component: ListproduitsComponent;
  let fixture: ComponentFixture<ListproduitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListproduitsComponent]
    });
    fixture = TestBed.createComponent(ListproduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
