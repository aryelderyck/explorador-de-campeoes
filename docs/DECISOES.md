# Registro de decisões

Uma entrada por decisão importante: data, o que foi decidido, o motivo e as alternativas descartadas. Entrada nova vai
no fim. Decisão que mudar não é apagada: ganha uma entrada nova que cita a antiga.

| Nº | Data | Decisão | Motivo | Alternativas descartadas |
| --- | --- | --- | --- | --- |
| 1 | 2026-11-13 | Vite + React + TypeScript | Gera arquivos estáticos, que é o que o GitHub Pages serve; TypeScript avisa erros antes de rodar e é pedido em vaga de frontend | Next.js (traz conceitos de servidor que o projeto não tem); JavaScript puro (sem os avisos de tipo) |
| 2 | 2026-11-13 | Rotas com React Router e `HashRouter` (`/#/campeao/Ahri`) | O que vem depois do `#` não vai ao servidor, então recarregar a página funciona no GitHub Pages sem truque | `BrowserRouter` com `404.html` (link direto responde 404 antes de funcionar); roteador feito à mão (não é o que o mercado usa) |
| 3 | 2026-11-13 | Dados buscados com `fetch` em uma função própria (`buscarJson`), com tempo limite de 10 s | Um lugar só trata rede, erro e demora; ensina `useEffect` e os estados de carga | TanStack Query (esconde o mecanismo que queremos aprender) |
| 4 | 2026-11-13 | Cache em memória, um `Map` por endereço | O endereço contém a versão do jogo: endereço igual, resposta igual, sem risco de dado velho | Guardar o catálogo no `localStorage` (dado velho e limite de espaço) |
| 5 | 2026-11-13 | Formato próprio dos dados, convertido e validado à mão na entrada | Só um arquivo conhece o formato da Riot; se ele mudar, quebra em um lugar, com mensagem clara | Usar o formato da Riot direto (nomes obscuros espalhados); biblioteca Zod (dependência a mais) |
| 6 | 2026-11-13 | Busca, filtro e comparação no endereço; favoritos em Context + `localStorage` com formato versionado | O link compartilha a busca e o botão voltar preserva o filtro; favoritos são usados por várias páginas | Tudo em `useState` (o filtro some ao voltar); Redux ou Zustand (grande demais para o projeto) |
| 7 | 2026-11-13 | CSS Modules e um arquivo de variáveis | CSS comum, sem dependência, e as classes de um componente não colidem com as de outro | CSS global (classes colidem); Tailwind (dependência e menos treino de CSS) |
| 8 | 2026-11-13 | Testes com Vitest, Testing Library e jsdom; `fetch` trocado por dublê; nenhum teste acessa a internet | Mesma configuração do Vite; testes rápidos e que não dependem da Riot estar no ar | Jest (configuração extra com o Vite); MSW (dependência e conceito a mais) |
| 9 | 2026-11-13 | Publicação pelo GitHub Actions no GitHub Pages, só com o CI verde | Grátis, no mesmo lugar do código, e nada quebrado vai ao ar | Ramo `gh-pages` (guarda o build no repositório); Netlify ou Vercel (mais uma conta) |
| 10 | 2026-11-13 | Nomes do domínio em português (`filtrarCampeoes`); termos técnicos em inglês | Consistência com os outros projetos do Aryel | Tudo em inglês (padrão do mercado; pode ser revisto) |
| 11 | 2026-11-13 | **Exceção consciente:** dados e imagens carregados em tempo de execução de `https://ddragon.leagueoflegends.com`, única origem externa, limitada por CSP | É a fonte oficial dos dados, indicada pela política da Riot; nada da Riot entra no repositório | Copiar dados e imagens para o repositório (proibido pelas regras do projeto) |
| 12 | 2026-11-13 | Fixtures de teste com campeões inventados, no formato do catálogo | Dado real nunca entra no repositório | Gravar respostas reais da Riot |
| 13 | 2026-11-13 | Kit `padroes-de-qualidade` como guarda-corpo, não como lista obrigatória | Decisão do Aryel: o kit serve para o Claude não afirmar sem provar; o que está fora do escopo é ignorado (especificação, seção 13) | Seguir o kit inteiro (instalador, travas, checklist com evidência) |
| 14 | 2026-11-13 | Trabalho em 4 etapas, cerca de 24 sessões de 1 hora | A meta de 4 a 5 dias não cabe em 1 hora por dia com explicação linha por linha | Cortar a explicação para caber no prazo |
| 15 | 2026-11-16 | Identidade do git definida só neste repositório (`git config --local`); commits feitos pelo Claude saem como `Claude` | Nenhum dado pessoal da máquina vaza para o histórico | Identidade global da máquina |
