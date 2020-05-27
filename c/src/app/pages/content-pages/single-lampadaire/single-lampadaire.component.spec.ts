import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLampadaireComponent } from './single-lampadaire.component';

describe('SingleLampadaireComponent', () => {
  let component: SingleLampadaireComponent;
  let fixture: ComponentFixture<SingleLampadaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleLampadaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLampadaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
