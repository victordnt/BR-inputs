import { TestBed } from '@angular/core/testing';
import { CpfCnpjPipe } from './cpf-cnpj.pipe';
describe('CpfCnpjPipe', () => {
  let pipe: CpfCnpjPipe;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CpfCnpjPipe] });
    pipe = TestBed.inject(CpfCnpjPipe);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('Converte 01234567890 (11 caracteres) para 012.345.678-90', () => {
    const value: any = '01234567890';
    const args: string[] = [];
    expect(pipe.transform(value, args)).toEqual('012.345.678-90');
  });
  it('Converte 12345678000190 para 12.345.678/0001-90', () => {
    const value: any = '12345678000190';
    const args: string[] = [];
    expect(pipe.transform(value, args)).toEqual('12.345.678/0001-90');
  });
  it('Converte 66666612345678000190 para 12.345.678/0001-90, remove caracteres que ultrapassam o tamanho de cnpj', () => {
    const value: any = '66666612345678000190';
    const args: string[] = [];
    expect(pipe.transform(value, args)).toEqual('12.345.678/0001-90');
  });
  it('Aceita number', () => {
    const value: any = 1234567890;
    const args: string[] = [];
    expect(pipe.transform(value, args)).toEqual('012.345.678-90');
  });
  it('Remove caracteres não numéricos ', () => {
    const value: any = '01s23e45i67o89u0';
    const args: string[] = [];
    expect(pipe.transform(value, args)).toEqual('012.345.678-90');
  });
});
