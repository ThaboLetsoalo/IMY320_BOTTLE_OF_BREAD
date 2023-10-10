import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarPickerPage } from './calendar-picker.page';

describe('CalendarPickerPage', () => {
  let component: CalendarPickerPage;
  let fixture: ComponentFixture<CalendarPickerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalendarPickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
