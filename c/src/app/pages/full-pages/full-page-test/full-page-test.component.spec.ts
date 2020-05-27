import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPageTestComponent } from './full-page-test.component';

describe('FullPageTestComponent', () => {
  let component: FullPageTestComponent;
  let fixture: ComponentFixture<FullPageTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullPageTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullPageTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
