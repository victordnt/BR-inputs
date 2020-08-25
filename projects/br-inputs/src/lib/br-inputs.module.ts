import { NgModule } from '@angular/core';
import { BRInputsComponent } from './br-inputs.component';
import { CpfCnpjComponent } from './cpf-cnpj/cpf-cnpj.component';
import { CpfCnpjDirective } from './cpf-cnpj/cpf-cnpj.directive';
import { CpfCnpjPipe } from './pipes/cpf-cnpj.pipe';

@NgModule({
  declarations: [BRInputsComponent, CpfCnpjComponent, CpfCnpjDirective, CpfCnpjPipe],
  imports: [
  ],
  exports: [BRInputsComponent, CpfCnpjComponent, CpfCnpjDirective]
})
export class BRInputsModule { }
