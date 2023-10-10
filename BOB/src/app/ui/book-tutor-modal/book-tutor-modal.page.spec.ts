import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookTutorModalPage } from './book-tutor-modal.page';

describe('BookTutorModalPage', () => {
  let component: BookTutorModalPage;
  let fixture: ComponentFixture<BookTutorModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BookTutorModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
