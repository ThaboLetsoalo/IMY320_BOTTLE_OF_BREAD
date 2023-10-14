import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomloaderPage } from './customloader.page';

describe('CustomloaderPage', () => {
  let component: CustomloaderPage;
  let fixture: ComponentFixture<CustomloaderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CustomloaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
