// A lista é a fonte única: dela saem o tipo Funcao e a conferência de valores desconhecidos.
export const FUNCOES = [
  "Assassin",
  "Fighter",
  "Mage",
  "Marksman",
  "Support",
  "Tank",
] as const;

export type Funcao = (typeof FUNCOES)[number];

export function ehFuncao(valor: unknown): valor is Funcao {
  return FUNCOES.some((funcao) => funcao === valor);
}

export type Estatisticas = {
  vida: number;
  mana: number;
  armadura: number;
  resistenciaMagica: number;
  danoDeAtaque: number;
  velocidadeDeAtaque: number;
  alcance: number;
  velocidadeDeMovimento: number;
};

export type Campeao = {
  id: string; // "Belveth": vai no endereço da página
  nome: string; // "Bel'Veth": é o que aparece na tela e entra na busca
  titulo: string;
  resumo: string;
  funcoes: Funcao[];
  imagem: string; // endereço completo do retrato
  estatisticas: Estatisticas;
};
