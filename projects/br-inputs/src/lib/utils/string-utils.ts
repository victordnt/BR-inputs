export class StringUtils {
  /**
   * @function removeCaracteresEspeciais
   * Remove caracteres especiais sem contar com os acentuados
   *
   * @param value
   *  valor a ser convertido
   */
  public static removeCaracteresEspeciais(value: string): string {
    return value.replace(/[^\wèéòàùì\s]/gi, '');
  }

  /**
   * @function removeCaracteresNaoNumericos
   * Remove caracteres não númericos sem contar com os acentuados
   *
   * @param value
   *  valor a ser convertido
   */
  public static removeCaracteresNaoNumericos(value: string): string {
    return value.replace(/\D/g, '');
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
    valor = valor ? valor.toString() : '';
    let index = 0;
    objPosicoesCaracteres = objPosicoesCaracteres.sort((a, b) => a.posicao - b.posicao);
    for (const { posicao, caracter } of objPosicoesCaracteres) {
      valor = `${valor.substring(0, index + posicao)}${caracter}${valor.substring(index + posicao)}`;
      index++;
    }

    return valor;
  }


}
