import { enderecoDoRetrato } from "./enderecos.ts";
import type { Campeao, Estatisticas, Funcao } from "./tipos.ts";

// Erro próprio, para a tela poder mostrar "os dados vieram diferentes do esperado"
// e não confundir com falha de rede.
export class ErroDeFormato extends Error {}

type Objeto = Record<string, unknown>;

function ehObjeto(valor: unknown): valor is Objeto {
  return typeof valor === "object" && valor !== null && !Array.isArray(valor);
}

function lerObjeto(pai: Objeto, chave: string): Objeto {
  const valor = pai[chave];
  if (!ehObjeto(valor)) {
    throw new ErroDeFormato(`O campo "${chave}" deveria ser um objeto.`);
  }
  return valor;
}

function lerTexto(pai: Objeto, chave: string): string {
  const valor = pai[chave];
  if (typeof valor !== "string" || valor === "") {
    throw new ErroDeFormato(
      `O campo "${chave}" deveria ser um texto não vazio.`,
    );
  }
  return valor;
}

function lerNumero(pai: Objeto, chave: string): number {
  const valor = pai[chave];
  if (typeof valor !== "number" || !Number.isFinite(valor)) {
    throw new ErroDeFormato(`O campo "${chave}" deveria ser um número.`);
  }
  return valor;
}

function converterEstatisticas(bruto: Objeto): Estatisticas {
  return {
    vida: lerNumero(bruto, "hp"),
    mana: lerNumero(bruto, "mp"),
    armadura: lerNumero(bruto, "armor"),
    resistenciaMagica: lerNumero(bruto, "spellblock"),
    danoDeAtaque: lerNumero(bruto, "attackdamage"),
    velocidadeDeAtaque: lerNumero(bruto, "attackspeed"),
    alcance: lerNumero(bruto, "attackrange"),
    velocidadeDeMovimento: lerNumero(bruto, "movespeed"),
  };
}

// TODO(human): escreva o corpo desta função (a ficha está na conversa).
function converterFuncoes(_bruto: unknown): Funcao[] {
  throw new ErroDeFormato("converterFuncoes ainda não foi escrita.");
}

function converterCampeao(bruto: unknown, versao: string): Campeao {
  if (!ehObjeto(bruto)) {
    throw new ErroDeFormato("Um dos campeões não é um objeto.");
  }
  return {
    id: lerTexto(bruto, "id"),
    nome: lerTexto(bruto, "name"),
    titulo: lerTexto(bruto, "title"),
    resumo: lerTexto(bruto, "blurb"),
    funcoes: converterFuncoes(bruto["tags"]),
    imagem: enderecoDoRetrato(
      versao,
      lerTexto(lerObjeto(bruto, "image"), "full"),
    ),
    estatisticas: converterEstatisticas(lerObjeto(bruto, "stats")),
  };
}

// Recebe o JSON do champion.json, ainda sem tipo (unknown), e devolve a lista no nosso formato.
export function converterCampeoes(resposta: unknown): Campeao[] {
  if (!ehObjeto(resposta)) {
    throw new ErroDeFormato("A resposta da lista não é um objeto.");
  }
  const versao = lerTexto(resposta, "version");
  const campeoes = Object.values(lerObjeto(resposta, "data")).map((bruto) =>
    converterCampeao(bruto, versao),
  );
  if (campeoes.length === 0) {
    throw new ErroDeFormato("A resposta não trouxe nenhum campeão.");
  }
  return campeoes;
}
