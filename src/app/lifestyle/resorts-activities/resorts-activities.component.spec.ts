import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortsActivitiesComponent } from './resorts-activities.component';

describe('ResortsActivitiesComponent', () => {
  let component: ResortsActivitiesComponent;
  let fixture: ComponentFixture<ResortsActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortsActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortsActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
