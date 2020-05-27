import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LampMapComponent } from './lamp-map.component';

describe('LampMapComponent', () => {
  let component: LampMapComponent;
  let fixture: ComponentFixture<LampMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LampMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LampMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
