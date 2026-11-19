// Mesma origem liberada na CSP do vite.config.ts (docs/DECISOES.md, decisão 11).
export const ORIGEM_DOS_DADOS = "https://ddragon.leagueoflegends.com";

// encodeURIComponent impede que um texto estranho vindo da resposta mude o caminho do endereço.
export function enderecoDoRetrato(versao: string, arquivo: string): string {
  return `${ORIGEM_DOS_DADOS}/cdn/${encodeURIComponent(versao)}/img/champion/${encodeURIComponent(arquivo)}`;
}
