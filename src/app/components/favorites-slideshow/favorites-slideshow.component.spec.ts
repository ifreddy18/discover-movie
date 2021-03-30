import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesSlideshowComponent } from './favorites-slideshow.component';

describe('FavoritesSlideshowComponent', () => {
  let component: FavoritesSlideshowComponent;
  let fixture: ComponentFixture<FavoritesSlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesSlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
