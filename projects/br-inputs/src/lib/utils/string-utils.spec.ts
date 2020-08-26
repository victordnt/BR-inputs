import { StringUtils } from './string-utils';

describe('StringUtils', () => {
  it('should create an instance', () => {
    expect(new StringUtils())
      .toBeTruthy();
  });

/**
 *  @function adicionaZerosAEsquerda
 */
  it('adicionaZerosAEsquerda pode receber valores numéricos para a conversão', () => {
    expect(StringUtils.adicionaZerosAEsquerda(123, 5))
      .toBe('00123');
  });

  it('adicionaZerosAEsquerda pode receber string', () => {
    expect(StringUtils.adicionaZerosAEsquerda('123', 10))
      .toBe('0000000123');
  });

  it('Valor passado a adicionaZerosAEsquerda pode ser maior que o valor total de caracteres e retorna o valor sem zeros a esquerda', () => {
    expect(StringUtils.adicionaZerosAEsquerda(123456, 5))
      .toBe('123456');
  });

  it('Valor passado a adicionaZerosAEsquerda pode ser nulo, retornando somente a string de zeros', () => {
    expect(StringUtils.adicionaZerosAEsquerda(null, 5))
      .toBe('00000');
  });

  it('Valor passado a adicionaZerosAEsquerda pode ser não numero', () => {
    expect(StringUtils.adicionaZerosAEsquerda('abc', 5))
      .toBe('00abc');
  });

/**
 *  @function removeCaracteresEspeciais
 */
  it('removeCaracteresEspeciais tira os caracteres especiais, sem contar com acentos.', () => {
    expect(StringUtils.removeCaracteresEspeciais('/?v°®ŧ←↓→øþ´ªiº~ĸł´̉ħ̉ŋđtðßæuº«»©“V”µ─·̣̣ạI¹²³£¢¬T{[]}!@#U$%¨1&2*(3)'))
      .toBe('vituVITU123');
  });

/**
 *  @function adicionaCaracteresPorPosicao
 */
  it('adicionaCaracteresPorPosicao deve adicionar caracteres nas posições indicadas', () => {
    expect(StringUtils.adicionaCaracteresPorPosicao('01234567890',
      [{ posicao: 3, caracter: '.' }, { posicao: 6, caracter: '.' }, { posicao: 9, caracter: '-' }]))
      .toBe('012.345.678-90');
  });

  it('adicionaCaracteresPorPosicao deve funcionar mesmo fora de ordem', () => {
    expect(StringUtils.adicionaCaracteresPorPosicao('01234567890',
      [{ posicao: 9, caracter: '-' }, { posicao: 3, caracter: '.' }, { posicao: 6, caracter: '.' }]))
      .toBe('012.345.678-90');
  });

  it('adicionaCaracteresPorPosicao aceita posições iguais, porém devem estar em ordem!', () => {
    expect(StringUtils.adicionaCaracteresPorPosicao('01234567890',
      [{ posicao: 9, caracter: '-' }, { posicao: 9, caracter: '.' }, { posicao: 6, caracter: '.' }]))
      .toBe('012345.678-.90');
  });

  it('adicionaCaracteresPorPosicao aceita posições acima so tamanho da string a ser convertida', () => {
    expect(StringUtils.adicionaCaracteresPorPosicao('abc', [{ posicao: 20, caracter: '4' }]))
      .toBe('abc4');
  });

  it('adicionaCaracteresPorPosicao aceita valor nulo, e vai preencher o valor com os caracteres do array', () => {
    expect(StringUtils.adicionaCaracteresPorPosicao(null,
    [{ posicao: 1, caracter: '1' }, { posicao: 2, caracter: '2' }, { posicao: 0, caracter: '0' }]))
      .toBe('012');
  });

});
