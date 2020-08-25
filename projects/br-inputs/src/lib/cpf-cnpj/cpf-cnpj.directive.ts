import { StringUtils } from './../utils/string-utils';
import { CpfCnpjPipe } from './../pipes/cpf-cnpj.pipe';
import { KeyboardEventUtils } from './../utils/keyboard-event-utils';
import { Directive, ElementRef, forwardRef, HostListener, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const NUMBER_REGEXP = new RegExp('^[0-9]*$');
@Directive({
  selector: 'input[type="brCpfCnpj"]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CpfCnpjDirective),
    multi: true,
  }]
})
export class CpfCnpjDirective implements ControlValueAccessor {
  /**
   * Ao escrever:
   * <input type="brCpfCnpj" retornaNumber [(ngModel)]="cpfCnpjAsNumber">
   * por existir o atributo retornaNumber sem atribuição de valor ele retorna falso,
   * por isso o @Input('retornaNumber') atribui valor ao naoRetornaNumber
   *
   * Resumindo, não funciona como o disabled, que só é disabled se existir o
   * atributo, mesmo sem valor definido
   */
  // TODO criar diretiva exclusiva de retornaNumber
  @Input('retornaNumber')
  private naoRetornaNumber = true;
  private input: HTMLInputElement;
  private innerValue: any;
  private cpfCnpjPipe = new CpfCnpjPipe();

  public get retornaNumber(): boolean {
    return !this.naoRetornaNumber;
  }
  public set retornaNumber(v: boolean) {
    this.naoRetornaNumber = !v;
  }

  get value(): any {
    return this.innerValue;
  }
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChange(v);
    }
  }

  constructor(
    private element: ElementRef,
  ) {
    this.input = this.element.nativeElement as HTMLInputElement;
  }

  onChange: (_: any) => void = () => { };
  onTouched: (_: any) => void = () => { };

  writeValue(v: any): void {
    this.value = v;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.input.disabled = isDisabled;
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (KeyboardEventUtils.validCommands(event)) {
      return;  // let it happen, don't do anything
    }
    if (event.key === ' ' || isNaN(Number(event.key))) {
      event.preventDefault();
    }
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    if (KeyboardEventUtils.validCommands(event) && event.key !== 'Backspace') {
      return;  // let it happen, don't do anything
    }
    const caretPosition = this.input.selectionStart;
    const moveCaret = this.input.value.length > 2 && this.input.value.length !== 15;
    const cpfCnpjAsNumber = Number(StringUtils.removeCaracteresEspeciais(this.input.value));
    this.input.value = this.cpfCnpjPipe.transform(cpfCnpjAsNumber);
    if (this.retornaNumber) {
      this.writeValue(cpfCnpjAsNumber);
    } else {
      this.writeValue(this.input.value);
    }
    if (moveCaret) {
      this.moveCaretParaPosicaoCorreta(event, caretPosition);
    }
  }

  private moveCaretParaPosicaoCorreta(event: KeyboardEvent, caretPosition: number): void {
    if (event.key !== 'Backspace') {
      this.input.setSelectionRange(caretPosition, caretPosition);
    }
    else {
      this.input.setSelectionRange(caretPosition + 1, caretPosition + 1);
    }
  }
}
