import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BRInputsComponent } from './br-inputs.component';

describe('BRInputsComponent', () => {
  let component: BRInputsComponent;
  let fixture: ComponentFixture<BRInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BRInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BRInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
