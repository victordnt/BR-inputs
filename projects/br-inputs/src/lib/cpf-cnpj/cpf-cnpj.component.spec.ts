import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfCnpjComponent } from './cpf-cnpj.component';

describe('CpfCnpjComponent', () => {
  let component: CpfCnpjComponent;
  let fixture: ComponentFixture<CpfCnpjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpfCnpjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpfCnpjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
