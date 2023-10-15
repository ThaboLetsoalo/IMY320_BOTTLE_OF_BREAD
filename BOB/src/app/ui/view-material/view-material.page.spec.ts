import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewMaterialPage } from './view-material.page';

describe('ViewMaterialPage', () => {
  let component: ViewMaterialPage;
  let fixture: ComponentFixture<ViewMaterialPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewMaterialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
