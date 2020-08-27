import { StringUtils } from './../utils/string-utils';
import { Pipe, PipeTransform } from '@angular/core';

const TAMANHO_CPF = 11;
const TAMANHO_CNPJ = 14;

const CARACTERES_CPF = [
  { posicao: 3, caracter: '.' },
  { posicao: 6, caracter: '.' },
  { posicao: 9, caracter: '-' }
];

const CARACTERES_CNPJ = [
  { posicao: 2, caracter: '.' },
  { posicao: 5, caracter: '.' },
  { posicao: 8, caracter: '/' },
  { posicao: 12, caracter: '-' },

];

@Pipe({
  name: 'cpfCnpj'
})
export class CpfCnpjPipe implements PipeTransform {

  transform(value: string | number, args?: string[]): string {
    let tamanho = TAMANHO_CPF;
    let caracteres = CARACTERES_CPF;
    value = StringUtils.removeCaracteresNaoNumericos(value.toString());
    if (value.length > TAMANHO_CPF) {
      tamanho = TAMANHO_CNPJ;
      caracteres = CARACTERES_CNPJ;
    }
    if (value.length > TAMANHO_CNPJ) {
      value = value.substring(value.length - TAMANHO_CNPJ);
    }
    return StringUtils.adicionaCaracteresPorPosicao( StringUtils.adicionaZerosAEsquerda(value, tamanho), caracteres);
  }

}
