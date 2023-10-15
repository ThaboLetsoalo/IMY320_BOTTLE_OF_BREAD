import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMaterialPage } from './add-material.page';

describe('AddMaterialPage', () => {
  let component: AddMaterialPage;
  let fixture: ComponentFixture<AddMaterialPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddMaterialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
