import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyGroupsPage } from './study-groups.page';

describe('StudyGroupsPage', () => {
  let component: StudyGroupsPage;
  let fixture: ComponentFixture<StudyGroupsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudyGroupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
