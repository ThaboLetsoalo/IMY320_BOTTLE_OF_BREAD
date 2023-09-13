import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TutorAlumniPage } from './tutor-alumni.page';

describe('TutorAlumniPage', () => {
  let component: TutorAlumniPage;
  let fixture: ComponentFixture<TutorAlumniPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TutorAlumniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
