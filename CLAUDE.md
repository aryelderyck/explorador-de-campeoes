# CLAUDE.md: Explorador de Campeões

## O projeto

Explorador de campeões de League of Legends: lista, busca, filtro, detalhe, comparação e favoritos.
Projeto simples, de aprendizado e portfólio. **Prioridade: ficar muito bem apresentável.**
Stack: Vite, React, TypeScript, CSS Modules. Sem servidor, sem chave de API, sem biblioteca de testes.
Dados e imagens vêm do Data Dragon da Riot em tempo de execução e nunca entram no repositório.

## Comandos

- Instalar: `npm install`
- Rodar: `npm run dev`
- Conferir (formatação, linter e tipos): `npm run conferir`
- Formatar: `npm run formatar`
- Build: `npm run build`

## Estrutura

- `src/dados/`: tudo que fala com a Riot. Só esta pasta acessa a rede e conhece o formato da Riot.
- `src/logica/`: funções puras, sem React.
- `src/paginas/`: uma por rota; buscam dados e guardam estado.
- `src/componentes/`: só recebem valores e mostram.
- `docs/`: especificação, plano, `DECISOES.md` e `MAPA-DE-ARQUIVOS.md`.

## Sempre

- Começar a sessão com `git status -sb` e `git pull --ff-only`, e ler o plano para saber a tarefa atual.
- Rodar `npm run conferir` e ler a saída antes de dizer que funciona. Dizer o que não foi verificado.
- Tela nova ou alterada: capturas em 1440 px e 390 px, olhadas, antes de dizer que ficou boa.
- Atualizar `docs/MAPA-DE-ARQUIVOS.md` no mesmo commit que cria, move ou apaga um arquivo.
- Registrar decisão importante em `docs/DECISOES.md` e mudança de plano em "Desvios" do plano.
- Conferir no registro do npm (nome exato e repositório) antes de instalar qualquer pacote.
- Commits pequenos, em português, `tipo: o que mudou`, em ramos curtos. Nada fica sem commit e sem envio ao fim.
- Acessibilidade: elementos semânticos, texto alternativo, rótulo nos campos, foco visível, contraste 4,5:1,
  alvos de 44 px, `width` e `height` em toda imagem.

## Nunca

- Dado, imagem ou texto da Riot dentro do repositório. Segredo, token ou e-mail em arquivo.
- Recurso de terceiros além de `https://ddragon.leagueoflegends.com` (nada de CDN, fonte externa, analytics).
- Dado de fora inserido como HTML (`dangerouslySetInnerHTML`).
- Logos ou marcas da Riot, ou visual que imite o cliente do jogo.
- Criar arquivo que não dá para justificar.

## A pessoa e o jeito de ensinar

Aryel é desenvolvedor iniciante, conhece bem League of Legends e fala português. Até 1 hora por sessão.
Ele escreve código na conversa; o Claude grava, roda e mostra a saída.

- Uma tarefa do plano por vez. Dizer antes, em poucas palavras, o que vai fazer.
- Antes de criar um arquivo: para que serve, por que naquela pasta, por que aquele nome, alternativas.
- Primeira aparição de uma sintaxe, conceito ou peça de infraestrutura: explicar linha por linha, com o porquê.
  Da segunda vez: "mesmo padrão de X" e só o que for novo.
- Cada decisão: o que escolheu, por quê, alternativas e o que se ganha ou perde.
- Diagramas e tabelas sempre que ajudarem, legíveis no celular.
- Termo técnico em inglês com a tradução na primeira vez. Erro ou tela em inglês: ele diz primeiro o que entendeu.
- Ao fechar a tarefa: `APRENDIZADOS.md` com resumo, dificuldade e de 3 a 5 termos em inglês.
- Ao fechar a tarefa: 1 ou 2 perguntas para ele explicar de volta. Se ele pedir para pular, pular.
- Só avançar para a próxima tarefa quando ele disser.

**O Aryel escreve sozinho** (não entregar a solução; ficha, tabela de exemplos e uma dica por vez, quando pedir):

1. `src/logica/filtrarCampeoes.ts`
2. `src/logica/compararCampeoes.ts`

## Kit de padrões

O kit `padroes-de-qualidade` (`../padroes-de-qualidade`) é guarda-corpo, não lista obrigatória: serve para o Claude
não afirmar sem provar. O que vale dele está na seção 13 da especificação.
