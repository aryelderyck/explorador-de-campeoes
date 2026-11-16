# Mapa de arquivos

Uma linha por arquivo do repositório. Esta tabela muda **no mesmo commit** que cria, move ou apaga um arquivo.
Arquivo que não dá para justificar não é criado.

| Arquivo | Para que serve | Por que está aqui | Alternativas | Tarefa |
| --- | --- | --- | --- | --- |
| `LICENSE` | Diz o que outras pessoas podem fazer com o código (licença MIT) | Na raiz, com este nome, é onde o GitHub procura a licença | Sem licença (ninguém poderia reutilizar); GPL (exige que derivados sejam abertos) | Criado pelo GitHub com o repositório |
| `.gitattributes` | Manda o git guardar todo texto com fim de linha LF | Tem de ficar na raiz, com este nome exato, para o git ler | Configurar `core.autocrlf` em cada máquina (depende de cada pessoa lembrar) | 1 |
| `APRENDIZADOS.md` | Diário: resumo, dificuldades e termos em inglês de cada tarefa | Na raiz, para ser visto por quem abre o repositório; faz parte do portfólio | Dentro de `docs/` (mais escondido) | 1 |
| `docs/DECISOES.md` | Registro das decisões com motivo e alternativas | `docs/` reúne a documentação que não é a porta de entrada | Uma seção no README (ficaria longo); um arquivo por decisão (demais para este tamanho) | 1 |
| `docs/MAPA-DE-ARQUIVOS.md` | Este arquivo: o porquê de cada arquivo | Junto dos outros documentos, em `docs/` | Comentário no topo de cada arquivo (JSON não aceita comentário) | 1 |
| `docs/superpowers/specs/2026-11-13-explorador-de-campeoes-design.md` | Especificação: o que o projeto faz e como é desenhado | Pasta e nome com data seguem o fluxo de trabalho usado nos outros projetos do Aryel | `docs/ESPECIFICACAO.md` (mais curto, fora do padrão dos outros projetos) | Antes da 1 |
| `docs/superpowers/plans/2026-11-13-explorador-de-campeoes.md` | Plano: as 24 tarefas, em ordem, e quem escreve cada uma | Mesmo motivo da especificação | `docs/PLANO.md`; issues do GitHub (boas para equipe, dispersas para estudo) | Antes da 1 |
