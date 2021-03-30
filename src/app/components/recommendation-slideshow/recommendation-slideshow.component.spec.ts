import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationSlideshowComponent } from './recommendation-slideshow.component';

describe('RecommendationSlideshowComponent', () => {
  let component: RecommendationSlideshowComponent;
  let fixture: ComponentFixture<RecommendationSlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationSlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
