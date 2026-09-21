# Sistema Operativo de Conteúdo

> Base privada e versionada para gerir um podcast e uma marca pessoal como um negócio.
> Pensa nesta pasta como o teu **servidor**: tudo o que importa vive aqui, com histórico e sem se perder nada.
> Acesso: **só o dono**. Nada de credenciais ou dados sensíveis aqui dentro.

Este documento explica a arquitetura do sistema e como o usar no dia a dia. É o ponto de entrada. Lê isto primeiro.

---

## Regra de ouro

> **Estrutura primeiro, conteúdo depois.**

Primeiro define-se onde cada coisa vive. Só depois se enche de conteúdo. A estrutura é o que te dá clareza, escala e sanidade quando o volume crescer. Nunca improvises a localização de um ficheiro — dá-lhe uma casa na estrutura ou arruma-o no `_inbox/` até decidires.

---

## Mentalidade

Não és só criador. És o CEO deste negócio. Este repositório é a tua sala de comando:

- **Decides com dados**, não com impulsos (ver `revisao/` e `memoria/decision-log.md`).
- **Documentas processos** para poderes delegar ou automatizar mais tarde (ver `producao/sops/`).
- **Proteges os teus ativos** com backups e políticas claras (ver `seguranca/`).
- **Trabalhas por sistemas**, não por tarefas soltas.

---

## Arquitetura: 5 camadas + 2 transversais

O sistema organiza-se em **5 camadas centrais** e **2 camadas transversais** que atravessam tudo.

### Camadas centrais

| # | Camada | Pasta | Para que serve |
|---|--------|-------|----------------|
| 1 | **Identidade** | `marca/` | Quem és, o que defendes, como soas. A base de tudo. |
| 2 | **Estratégia** | `estrategia/` | Para onde vais e como decides o que fazer. |
| 3 | **Produção** | `producao/` | Como transformas ideias em episódios e conteúdo publicado. Manual completo: [`producao/README.md`](producao/README.md). Blueprint de automações: [`producao/automacoes/README.md`](producao/automacoes/README.md) — inclui a vista de custo grátis-vs-pago em [`producao/automacoes/custo-e-camadas.md`](producao/automacoes/custo-e-camadas.md) e **O Arsenal, o manual de ferramentas por nível da marca, em [`producao/automacoes/arsenal.md`](producao/automacoes/arsenal.md)**. |
| 4 | **Memória** | `memoria/` | O que já decidiste, arquivaste e aprendeste. O teu histórico. |
| 5 | **Revisão** | `revisao/` | Como paras, medes e ajustas o rumo com ritmo. |

### Camadas transversais

| Camada | Pasta | Para que serve |
|--------|-------|----------------|
| **Segurança** | `seguranca/` | Acesso, backups (3-2-1), proteção de dados sensíveis. Protege todas as camadas. |
| **Inbox** | `_inbox/` | Ponto de entrada bruto. Tudo passa por aqui antes de ser arrumado. Alimenta todas as camadas. |

---

## Mapa de pastas

```
.
├── _inbox/                      # Despejo bruto — nada se perde, nada fica > 30 dias
├── marca/                       # IDENTIDADE
│   ├── missao-visao-valores.md
│   ├── brand-guidelines.md
│   └── posicionamento.md
├── estrategia/                  # ESTRATÉGIA
│   ├── metas-objetivos.md
│   ├── pilares-conteudo.md
│   └── benchmarking.md
├── producao/                    # PRODUÇÃO
│   ├── pipeline-episodio.md
│   ├── sops/
│   │   └── README.md
│   └── templates/
│       ├── template-episodio.md
│       └── template-conteudo.md
├── memoria/                     # MEMÓRIA
│   ├── decision-log.md
│   ├── inventario-mestre.md
│   ├── referencias.md
│   └── arquivo-episodios/
│       └── README.md
├── revisao/                     # REVISÃO
│   └── retrospetiva-mensal.md
└── seguranca/                   # SEGURANÇA (transversal)
    └── politica-acesso-backup.md
```

---

## Como usar este repositório como servidor versionado

1. **Cada mudança é um commit.** O histórico do Git é a tua máquina do tempo. Nunca perdes uma versão.
2. **Trabalha em ramos (branches)** quando fizeres alterações grandes; junta ao ramo principal quando estiver estável.
3. **Empacota releases mensais.** No fim de cada mês, cria uma etiqueta (tag) e/ou um arquivo comprimido do estado — ver `seguranca/politica-acesso-backup.md`.
4. **O `_inbox/` é a porta de entrada.** Despeja tudo aí primeiro; arruma depois, com calma, para o sítio certo.
5. **Nada de segredos.** Nunca faças commit de tokens, palavras-passe ou dados pessoais de terceiros.

---

## Fluxo de trabalho típico

```
Ideia bruta  →  _inbox/  →  arrumar na camada certa  →  produzir (producao/)
     →  publicar  →  arquivar (memoria/)  →  medir (revisao/)  →  ajustar estratégia
```

---

## Primeiros passos

1. Preenche `marca/` — sem identidade clara, o resto oscila.
2. Define metas em `estrategia/metas-objetivos.md`.
3. Estabelece os teus `estrategia/pilares-conteudo.md`.
4. Abre o [`producao/README.md`](producao/README.md) (Manual de Produção) e usa a ficha-mestra e as fases no próximo episódio.
5. Marca uma retrospetiva mensal recorrente com `revisao/retrospetiva-mensal.md`.

> Ver também o `README.md` na raiz para a descrição pública do repositório.

## Mapa visual

O mapa da arquitetura DOS está em `mapa/em-labs-dos.html` — abre no browser.
