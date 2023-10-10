import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudyMaterialSkeletonComponent } from './study-material-skeleton.component';

describe('StudyMaterialSkeletonComponent', () => {
  let component: StudyMaterialSkeletonComponent;
  let fixture: ComponentFixture<StudyMaterialSkeletonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyMaterialSkeletonComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudyMaterialSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
