import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlampeComponent } from './listlampe.component';

describe('ListlampeComponent', () => {
  let component: ListlampeComponent;
  let fixture: ComponentFixture<ListlampeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListlampeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListlampeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
