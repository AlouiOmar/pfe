import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlampeComponent } from './addlampe.component';

describe('AddlampeComponent', () => {
  let component: AddlampeComponent;
  let fixture: ComponentFixture<AddlampeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlampeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlampeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
