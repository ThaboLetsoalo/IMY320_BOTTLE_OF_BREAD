import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyMaterialPage } from './study-material.page';

describe('StudyMaterialPage', () => {
  let component: StudyMaterialPage;
  let fixture: ComponentFixture<StudyMaterialPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudyMaterialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
