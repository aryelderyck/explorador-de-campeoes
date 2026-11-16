# Diário de aprendizado: Explorador de Campeões

Um bloco por tarefa do plano: o que foi feito, o que aprendi, a dificuldade que apareceu e os termos novos em inglês.
O resumo é escrito pelo Claude ao fechar a tarefa; o que está entre aspas são palavras do Aryel.

## Antes do código: desenho e plano · 2026-11-13

**O que foi feito:** chamada real ao Data Dragon para conhecer o formato dos dados; desenho da arquitetura;
especificação e plano em 24 tarefas.

**O que aprendi**

- O catálogo da Riot é um conjunto de arquivos JSON públicos, um "retrato" do jogo por versão (patch).
- Por que o app busca o `versions.json` primeiro: "versões diferentes podem ter campeões diferentes, pode também
  mudar a classe e função do campeão". A outra metade: o número da versão faz parte do endereço da lista, então sem
  ele não dá para montar o endereço.
- O `id` do campeão (`Belveth`) nem sempre é igual ao nome (`Bel'Veth`): o `id` vai no endereço, o nome vai na busca.

**Dificuldade que apareceu:** a meta de 4 a 5 dias não cabia em 1 hora por dia; virou 4 etapas, cada uma com o site
publicado ao final.

**Termos em inglês**

| Termo    | Tradução           | O que é                                               |
| -------- | ------------------ | ----------------------------------------------------- |
| fetch    | buscar             | Função do navegador que pede um recurso a um endereço |
| fixture  | dado fixo de teste | Resposta inventada que o teste usa no lugar da rede   |
| cache    | reserva            | Guardar um resultado para não buscá-lo de novo        |
| endorsed | endossado, apoiado | No aviso legal: o projeto não é apoiado pela Riot     |

## Tarefa 1: preparar o repositório · 2026-11-16

**O que foi feito:** identidade do git definida só neste repositório; `.gitattributes`; `docs/DECISOES.md`;
`docs/MAPA-DE-ARQUIVOS.md`; este diário; primeiro Pull Request.

**O que aprendi**

- Um repositório guarda o histórico em commits; um ramo (branch) é uma linha de trabalho separada da `main`.
- O Pull Request é o pedido para juntar um ramo à `main`, e é onde o CI vai conferir o código antes de entrar.
- Windows termina linha com CRLF e Linux com LF; o `.gitattributes` manda o git guardar tudo em LF.

**Dificuldade que apareceu:** o primeiro envio (push) foi recusado com erro 403, porque o repositório não estava
ligado à sessão do Claude. Não era falta de permissão na conta.

**Termos em inglês**

| Termo        | Tradução             | O que é                                          |
| ------------ | -------------------- | ------------------------------------------------ |
| repository   | repositório          | A pasta do projeto com todo o histórico          |
| branch       | ramo                 | Linha de trabalho paralela à principal           |
| commit       | registro             | Um ponto salvo no histórico, com mensagem        |
| push         | enviar               | Mandar os commits da máquina para o GitHub       |
| pull request | pedido de integração | Pedido para juntar um ramo à `main`, com revisão |

## Tarefa 2: criar o projeto com o Vite · 2026-11-16

**O que foi feito:** cada pacote conferido no registro do npm antes de instalar; projeto React + TypeScript gerado
pelo Vite; exemplo que vinha pronto removido; site rodando com o título e "Em construção".

**O que aprendi**

- O `package.json` é a ficha do projeto, e o `package-lock.json` trava as versões exatas.
- O `index.html` tem uma `div` vazia; o `main.tsx` manda o React desenhar o componente `App` dentro dela.
- Um componente é uma função que devolve JSX, que parece HTML mas é JavaScript.
- `import` e `export` ligam um arquivo ao outro: o que um exporta, o outro importa.

**Dificuldade que apareceu:** o molde do Vite mudou desde o plano: hoje traz o linter oxlint no lugar do ESLint.
Plano é previsão; a ferramenta real é que manda, e a diferença fica registrada em "Desvios".

**Termos em inglês**

| Termo       | Tradução       | O que é                                                      |
| ----------- | -------------- | ------------------------------------------------------------ |
| dependency  | dependência    | Pacote de outra pessoa que o projeto usa                     |
| scaffold    | andaime, molde | Estrutura inicial gerada por uma ferramenta                  |
| build       | construção     | Transformar o código-fonte nos arquivos finais que vão ao ar |
| bundler     | empacotador    | Ferramenta que junta os arquivos em poucos (o Vite)          |
| strict mode | modo estrito   | Conjunto de checagens mais rigorosas do TypeScript           |

## Tarefa 3: formatador e linter · 2026-11-16

**O que foi feito:** Prettier instalado (conferido antes no registro do npm); linter oxlint mantido; scripts
`formatar` e `conferir` criados no `package.json`; todos os arquivos passados pelo formatador.

**O que aprendi**

- O formatador (Prettier) só arruma a aparência: aspas, ponto e vírgula, quebras de linha. Não muda o que o código faz.
- O linter (oxlint) procura erros prováveis, como usar um hook do React no lugar errado.
- O compilador (`tsc`) confere os tipos.
- `&&` entre comandos significa "rode o próximo só se o anterior passou".

**Dificuldade que apareceu:** nenhuma. Na primeira rodada o `conferir` reprovou 8 arquivos fora do formato, o que
mostrou que ele realmente confere.

**Termos em inglês**

| Termo     | Tradução   | O que é                                                  |
| --------- | ---------- | -------------------------------------------------------- |
| formatter | formatador | Ferramenta que padroniza a aparência do código           |
| linter    | analisador | Ferramenta que aponta erros prováveis sem rodar o código |
| script    | roteiro    | Apelido de um comando no `package.json`                  |
| check     | conferir   | Modo que só avisa, sem alterar arquivos                  |
| warning   | aviso      | Mensagem de algo suspeito, menos grave que um erro       |

## Tarefa 4: aviso legal e publicação · 2026-11-16

**O que foi feito:** componente `AvisoLegal`, que recebe o nome do projeto por props; endereço base do site; CSP
inserida no build; workflow que publica no GitHub Pages a cada mudança na `main`.

**O que aprendi**

- Props são os valores que um componente recebe de quem o usa, como os argumentos de uma função.
- `type` descreve o formato de um objeto; o TypeScript reclama se faltar uma prop ou se o tipo estiver errado.
- `{valor}` dentro do JSX insere um valor de JavaScript no meio da marcação.
- Um workflow é uma receita em YAML: quando rodar (`on`), o que pode fazer (`permissions`) e os passos (`steps`).
- A CSP diz ao navegador de onde a página pode carregar coisas. Provado: chamada a outro site foi bloqueada, e a
  chamada ao Data Dragon passou.

**Dificuldade que apareceu:** a CSP não pode ficar fixa no `index.html`, porque quebraria o modo de desenvolvimento
do Vite. Ela entra só no build.

**Termos em inglês**

| Termo      | Tradução            | O que é                                                                  |
| ---------- | ------------------- | ------------------------------------------------------------------------ |
| props      | propriedades        | Valores que um componente recebe                                         |
| workflow   | fluxo de trabalho   | Receita automática do GitHub Actions                                     |
| deploy     | publicar, implantar | Colocar o site no ar                                                     |
| job / step | trabalho / passo    | Um workflow tem jobs; cada job tem passos em ordem                       |
| artifact   | artefato            | Arquivo produzido por um passo e entregue a outro (aqui, a pasta `dist`) |
