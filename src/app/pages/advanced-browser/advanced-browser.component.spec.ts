import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedBrowserComponent } from './advanced-browser.component';

describe('AdvancedBrowserComponent', () => {
  let component: AdvancedBrowserComponent;
  let fixture: ComponentFixture<AdvancedBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
