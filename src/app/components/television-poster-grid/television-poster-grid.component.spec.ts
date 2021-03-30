import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisionPosterGridComponent } from './television-poster-grid.component';

describe( 'TelevisionPosterGridComponent', () => {
  let component: TelevisionPosterGridComponent;
  let fixture: ComponentFixture<TelevisionPosterGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelevisionPosterGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelevisionPosterGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
