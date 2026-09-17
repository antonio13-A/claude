# Guia de trabalho — EMIGRANTE MODE

Como abrir, alterar, guardar versões e publicar este site. Escrito para ser seguido
passo a passo, sem pressupor conhecimento prévio de Git.

---

## 1. Onde editar o código

Três sítios, do mais completo ao mais rápido:

| Onde | Quando usar | Como |
|---|---|---|
| **VS Code** no teu computador | Trabalho a sério | Instalar VS Code + Git, clonar o repositório |
| **github.dev** no browser | Correção rápida, sem instalar nada | Abrir o repositório no GitHub e carregar na tecla `.` |
| **Claude Code** | Quando queres que eu execute e verifique | Esta conversa |

### Clonar e abrir no VS Code (uma vez só)

```bash
git clone https://github.com/antonio13-A/claude.git
cd claude
code .
```

---

## 2. Ver o site enquanto o alteras

**Opção simples** — abrir `index.html` com duplo clique. Funciona, mas obriga a
atualizar à mão a cada alteração.

**Opção recomendada** — extensão *Live Server* no VS Code: clique direito em
`index.html` → *Open with Live Server*. O browser atualiza sozinho sempre que gravas.

**Sem extensões**, no terminal:

```bash
python3 -m http.server 8000     # depois abrir http://localhost:8000
```

---

## 3. O ciclo de trabalho (é sempre o mesmo)

```
branch  →  alterar  →  commit  →  push  →  pull request  →  merge  →  online
```

```bash
git checkout main && git pull origin main   # partir da versão mais recente
git checkout -b registo-nova-entrada        # ramo novo para esta alteração
# ... alterar ficheiros ...
git add -A
git commit -m "Adiciona entrada de registo da v0.2"
git push -u origin registo-nova-entrada
```

Depois, no GitHub: abrir pull request → rever → *Merge*. A Vercel publica sozinha.

**Porquê um ramo (`branch`) e não escrever diretamente em `main`?**
`main` é o que está online. Um ramo é uma bancada de trabalho separada: podes
partir tudo à vontade que o site público não se move. Só ao fazer *merge* é que a
alteração chega a quem visita.

---

## 4. Guardar versões antigas, separadas do que já está feito

É aqui que o Git deixa de ser burocracia e passa a ser rede de segurança.
São três mecanismos diferentes — e confundi-los é o erro mais comum:

| Mecanismo | O que é | Usa quando |
|---|---|---|
| **Commit** | Fotografia do projeto num instante | Sempre que acabas um pedaço de trabalho |
| **Tag** | Etiqueta com nome numa fotografia importante | Marcar `v0.1`, `v0.2`, ... |
| **Branch** | Linha de trabalho paralela | Experimentar sem tocar no que funciona |

### Marcar uma versão

```bash
git tag -a v0.3 -m "v0.3 — descrição curta"
git push origin v0.3
```

Ficam todas visíveis em **Releases/Tags** no GitHub, cada uma descarregável como ZIP.

### Ver como estava numa versão antiga

```bash
git checkout v0.1     # o projeto volta ao estado da v0.1
git checkout main     # regressar ao presente
```

Não perdes nada: as tags apontam para fotografias que ficam guardadas para sempre.

### Desfazer uma alteração já publicada

```bash
git revert <id-do-commit>
```

`revert` cria um commit novo que anula o anterior — o histórico mantém-se legível.
Evita `git reset --hard` em trabalho já partilhado: apaga história que outros
(e a Vercel) já viram.

### Experimentar um layout novo sem estragar o atual

```bash
git checkout -b layout-experimental
```

Se resultar, faz-se merge. Se não resultar, apaga-se o ramo e o site nunca soube
que a experiência existiu.

---

## 5. Onde mexer em cada coisa

| Quero mudar... | Ficheiro | Onde exatamente |
|---|---|---|
| Texto de uma secção | `index.html` | Cada secção tem comentário: `01 PROBLEMA`, `02 SISTEMA`, ... |
| Cores, tipos de letra, espaçamentos | `assets/css/styles.css` | Bloco `:root`, no topo |
| Comportamento (scroll, animações) | `assets/js/main.js` | Quatro blocos numerados |
| Adicionar entrada ao diário | `registo.html` | Copiar o `MODELO DE ENTRADA` comentado |
| Adicionar uma imagem | `assets/img/` | Ver `assets/img/README.md` |

### Criar uma aba (página) nova

1. Duplicar `registo.html` e dar-lhe outro nome, ex.: `projetos.html`.
2. Substituir o conteúdo dentro de `<main>`.
3. Acrescentar o link no `<nav class="topbar__nav">` de **todas** as páginas.
4. Na página atual, marcar o link com `aria-current="page"`.

O cabeçalho e o rodapé estão repetidos em cada ficheiro — é o custo de não haver
sistema de templates. Até 4 ou 5 páginas é perfeitamente gerível; a partir daí
vale a pena falarmos de um gerador de site estático.

---

## 6. Publicar

Não há passo de publicação manual. Depois de a Vercel estar ligada ao repositório:

- **merge para `main`** → o site público atualiza em segundos;
- **pull request aberto** → gera um URL de preview só para esse ramo, para veres
  antes de decidir.

---

## 7. Se algo correr mal

| Situação | Comando |
|---|---|
| Estraguei um ficheiro e ainda não fiz commit | `git checkout -- nome-do-ficheiro` |
| Quero ver o que alterei | `git status` e `git diff` |
| Quero ver o histórico | `git log --oneline` |
| Fiz commit com a mensagem errada | `git commit --amend` (só antes do push) |
| Publiquei algo que quero anular | `git revert <id-do-commit>` |

Regra que evita 90% dos sustos: **antes de alterar, cria um ramo; depois de
alterar, faz commit.** O trabalho que está em commit nunca se perde.
