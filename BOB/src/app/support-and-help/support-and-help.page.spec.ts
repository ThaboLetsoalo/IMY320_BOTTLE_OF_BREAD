import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportAndHelpPage } from './support-and-help.page';

describe('SupportAndHelpPage', () => {
  let component: SupportAndHelpPage;
  let fixture: ComponentFixture<SupportAndHelpPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SupportAndHelpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
