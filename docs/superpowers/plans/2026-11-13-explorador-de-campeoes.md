# Plano: Explorador de Campeões

Data: 2026-11-13 · Estado: aguardando aprovação do Aryel ·
Especificação: [`../specs/2026-11-13-explorador-de-campeoes-design.md`](../specs/2026-11-13-explorador-de-campeoes-design.md)

## Como ler

- **Uma tarefa por sessão de cerca de 1 hora.** São 22 tarefas em 4 etapas. Cada etapa termina com o site publicado.
- **Quem escreve:**
  - **Claude:** o Claude escreve e explica linha por linha.
  - **Juntos:** o Claude escreve e deixa um trecho de 5 a 15 linhas marcado `TODO(human)` para o Aryel.
  - **Solo:** o Aryel escreve tudo. Recebe a ficha, a tabela de exemplos e dicas em escada, uma por vez, quando pedir.
- **Toda tarefa segue o mesmo roteiro:**
  1. O Claude diz em poucas palavras o que vai fazer.
  2. Cada arquivo novo é explicado antes de existir e ganha a sua linha no `docs/MAPA-DE-ARQUIVOS.md`.
  3. O código, explicado na primeira aparição de cada sintaxe. Lógica: conferida com a tabela de exemplos da ficha.
  4. `npm run conferir` (formatação, linter e tipos), com a saída lida. Tela nova: capturas em 1440 px e 390 px.
  5. Commit pequeno em um ramo curto, com os comandos de git mostrados e explicados.
  6. `APRENDIZADOS.md`: resumo, dificuldade e de 3 a 5 termos em inglês.
  7. O Claude faz 1 ou 2 perguntas para o Aryel explicar de volta, e **para**. Só avança com o aval dele.
- O kit `padroes-de-qualidade` é guarda-corpo, não lista obrigatória (especificação, seção 13).
- Se uma tarefa não couber em 1 hora, ela é dividida e o plano é atualizado, com o motivo em "Desvios".

## Etapa 1: Base (tarefas 1 a 8)

No ar ao final: lista de campeões com imagens, versão do jogo e aviso legal.

| Nº  | Tarefa                                                                                                   | Quem   | O que aparece de novo                                                           |
| --- | -------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------- |
| 1   | ~~Preparar o repositório~~ **feita**                                                                     | Claude | git: clone, branch, commit, push, Pull Request; fim de linha LF                 |
| 2   | ~~Criar o projeto com o Vite~~ **feita**                                                                 | Claude | npm, `package.json`, lockfile, `tsconfig`, `index.html`, `import`, primeiro JSX |
| 3   | ~~Formatador, linter e `CLAUDE.md`~~ **feita**                                                           | Claude | formatter, linter, script do npm                                                |
| 4   | ~~Componente `AvisoLegal` e publicação~~ **feita**                                                       | Claude | componente, props, YAML, job, step, deploy, CSP                                 |
| 5   | Tipos do domínio e `converterCampeoes` com validação                                                     | Juntos | `type`, união, `unknown`, type guard, `Object.values`, `map`                    |
| 6   | `enderecos`, `buscarJson` com tempo limite, cache e `carregarCampeoes`                                   | Claude | `async`/`await`, `Promise`, `try`/`catch`, `AbortController`, `Map`             |
| 7   | `ListaPagina` e `CartaoCampeao`: carregar, mostrar carregando, erro e lista; versão no rodapé            | Claude | `useState`, `useEffect`, renderização condicional, `key`                        |
| 8   | Estilo: variáveis do tema escuro, grade responsiva, imagens com tamanho reservado. Capturas e publicação | Claude | CSS Modules, grid, media query                                                  |

## Etapa 2: Busca e filtro (tarefas 9 a 13)

No ar ao final: busca por nome e filtro por função, com endereço compartilhável.

| Nº  | Tarefa                                                                                                           | Quem               | O que aparece de novo                                |
| --- | ---------------------------------------------------------------------------------------------------------------- | ------------------ | ---------------------------------------------------- |
| 9   | `filtrarCampeoes`: ficha, tabela de exemplos, primeira versão                                                    | **Solo**           | `filter`, `includes`, `normalize`, desestruturação   |
| 10  | Revisão do código do Aryel e melhorias, uma por vez, conferindo os exemplos depois de cada uma                   | **Solo** + revisão | refatoração                                          |
| 11  | `CampoBusca`, `FiltroFuncao` e `EstadoDaTela`, ligados à lista com `useState`; contagem e "nada encontrado"      | Juntos             | campo controlado, evento, `label`, levantar o estado |
| 12  | Rotas: `HashRouter`, layout com cabeçalho e rodapé, página não encontrada; busca e filtro passam para o endereço | Claude             | rota, `Link`, `Outlet`, `useSearchParams`            |
| 13  | Teclado e foco na lista; capturas; publicação                                                                    | Claude             | árvore de acessibilidade, `aria-live`                |

## Etapa 3: Detalhe e favoritos (tarefas 14 a 18)

No ar ao final: página de cada campeão e favoritos que sobrevivem ao fechar o navegador.

| Nº  | Tarefa                                                                                              | Quem   | O que aparece de novo                                            |
| --- | --------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------- |
| 14  | `limparDescricao` (conferida com `<script>` e `<img onerror>` nos exemplos) e `converterDetalhe`    | Juntos | expressão regular, XSS, interseção de tipos                      |
| 15  | `DetalhePagina`: ler o id do endereço, carregar, estados, campeão inexistente; `TabelaEstatisticas` | Claude | `useParams`, tabela semântica                                    |
| 16  | `CartaoHabilidade` (passiva, Q, W, E, R), história, estilo e capturas                               | Claude | lista com `map` em JSX, composição                               |
| 17  | Favoritos no `localStorage`: formato versionado e tratamento de erro                                | Juntos | `JSON.parse`, `JSON.stringify`, `try`/`catch`, versão de formato |
| 18  | `FavoritosContext`, `BotaoFavorito` e filtro "só favoritos"; capturas e publicação                  | Claude | Context, `useContext`, hook próprio, `aria-pressed`              |

## Etapa 4: Comparação e acabamento (tarefas 19 a 22)

No ar ao final: comparação lado a lado e o projeto conferido contra o escopo.

| Nº  | Tarefa                                                                                                                                      | Quem           | O que aparece de novo                            |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------------ |
| 19  | `compararCampeoes`: ficha, tabela de exemplos, implementação e revisão                                                                      | **Solo**       | `keyof`, objeto como dicionário, tipo de retorno |
| 20  | `CompararPagina`, `SeletorCampeao` e `TabelaComparacao`, com os dois ids no endereço                                                        | Claude         | `select`, estado derivado                        |
| 21  | Estilo da comparação, capturas, teclado; imagens sob demanda, movimento reduzido, Lighthouse rodado à mão                                   | Claude         | tabela responsiva, `loading="lazy"`              |
| 22  | `README.md` só com o que foi executado; reler a política da Riot e decidir sobre o registro; conferir cada item do escopo no site publicado | Claude + Aryel | escrita técnica                                  |

## Tarefas solo: o que o Aryel recebe

**Tarefa 9, `src/logica/filtrarCampeoes.ts`**

- Assinatura: `filtrarCampeoes(lista: Campeao[], criterios: { texto: string; funcao: Funcao | null }): Campeao[]`
- Tabela de exemplos (entrada e saída esperada) cobrindo a seção 7 da especificação.
- Pontos a pesar: como comparar texto sem acento e sem pontuação; o que fazer com texto vazio; como não alterar a lista.

**Tarefa 19, `src/logica/compararCampeoes.ts`**

- Assinatura: `compararCampeoes(a: Campeao, b: Campeao): LinhaDeComparacao[]`
- Tabela de exemplos (entrada e saída esperada) cobrindo a seção 7 da especificação.
- Pontos a pesar: como percorrer as 8 estatísticas sem repetir código; como representar o empate; a ordem das linhas.

## Riscos do plano

| Risco                                        | O que fazemos                                                                     |
| -------------------------------------------- | --------------------------------------------------------------------------------- |
| O ambiente da nuvem é recriado a cada sessão | Toda sessão começa com `git status -sb` e `git pull`; nada fica sem commit ao fim |
| Explicação linha por linha estoura 1 hora    | Dividir a tarefa; nunca cortar a explicação                                       |
| Lighthouse com nota baixa em desempenho      | Medir na tarefa 23 e registrar o número real                                      |

## Desvios

- 2026-11-13: a especificação e o plano foram commitados antes da tarefa 1 e sem a linha no mapa de arquivos, para
  não se perderem no ambiente da nuvem. A tarefa 1 cria o mapa com essas linhas.
- 2026-11-13: plano enxugado de 25 para 24 tarefas depois que o Aryel decidiu usar o kit só como guarda-corpo.
- 2026-11-16 (tarefa 2): o molde atual do Vite traz o linter **oxlint**, e não o ESLint que o plano previa. Ficou o
  que veio no molde; a escolha entre os dois é a primeira decisão da tarefa 3.
- 2026-11-16 (tarefa 2): do molde do Vite, não entraram o `README.md` genérico, os ícones e logos (`public/`,
  `src/assets/`) nem os dois arquivos de CSS de exemplo. O estilo próprio chega na tarefa 9.
- 2026-11-16: a pedido do Aryel, saem o Vitest e toda biblioteca de testes, e o CI fica no mínimo (instalar, build e
  publicar). O plano passa de 24 para 22 tarefas, renumeradas; a lógica é conferida com tabelas de exemplos.
- 2026-11-16 (tarefa 3): ficou o oxlint, que veio no molde, no lugar do ESLint; Prettier sem arquivo de configuração.
- 2026-11-16: prioridade declarada pelo Aryel: projeto muito bem apresentável. As tarefas de estilo (8, 16 e 21) e o
  README (22) recebem o cuidado que iria para os testes.
- 2026-11-19 (tarefa 5): o arquivo `src/dados/enderecos.ts` nasceu aqui, e não na tarefa 6, porque o conversor
  precisa do endereço do retrato. A tarefa 6 acrescenta os outros endereços ao mesmo arquivo.
- 2026-11-19 (tarefa 5): a verificação da lógica foi um script de rascunho, fora do repositório, com campeões
  inventados, rodado com o próprio Node. Não há arquivo de teste no projeto (decisão 16).
