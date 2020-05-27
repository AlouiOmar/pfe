import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertPanneComponent } from './alert-panne.component';

describe('AlertPanneComponent', () => {
  let component: AlertPanneComponent;
  let fixture: ComponentFixture<AlertPanneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertPanneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertPanneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
