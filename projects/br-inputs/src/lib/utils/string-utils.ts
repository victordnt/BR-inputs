export class StringUtils {
  public static removeCaracteresEspeciais(value: string): any {
    return value.replace(/[^\wèéòàùì\s]/gi, '');
  }
  /**
   * @function adicionaZerosAEsquerda
   * adiciona zeros a esquerda de caracteres até chegar ao tamanho
   * total de caracteres indicado por totalDeCaracteres
   *
   * @param valor
   * Valor a ser alterado
   *
   * @param totalDeCaracteres
   * Total de caracteres apos adicionar os zeros a esquerda
   */
  public static adicionaZerosAEsquerda(valor: string | number, totalDeCaracteres: number): string {
    valor = valor ? valor.toString() : '0';
    if (valor.length >= totalDeCaracteres) {
      return valor;
    }

    while (valor.length < totalDeCaracteres) {
      valor = '0' + valor;
    }

    return valor;
  }

  /**
   * @function adicionaCaracteresPorPosicao:
   * retorna uma string onde serão adicionados
   * caracteres a partir de um array de objetos {posicao, caracter}.
   *
   * @param valor
   * Valor pelo qual será feita a adição de caracteres
   *
   * @param objPosicoesCaracteres
   * Array de objetos {posicao, caracter}.
   * Onde:
   * posicao -
   * A posição onde será inserido o caracter;
   * caracter -
   * String que será inserida na posição indicada.
   */
  public static adicionaCaracteresPorPosicao(
    valor: string | number,
    objPosicoesCaracteres: { posicao: number, caracter: string }[]
  ): string {
    valor = valor ? valor.toString() : '0';
    let index = 0;
    for (const { posicao, caracter } of objPosicoesCaracteres) {
      valor = `${valor.substring(0, index + posicao)}${caracter}${valor.substring(index + posicao)}`;
      index++;
    }

    return valor;
  }


}
