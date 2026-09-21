# Manual de Produção — Modelo de Produção do DOS

> O manual operacional da camada de **Produção** (`producao/`). Explica como uma ideia se transforma num episódio publicado, distribuído e arquivado — sempre da mesma forma, com a mesma qualidade. Este é o ponto de entrada da produção: se vais produzir alguma coisa, começa por aqui.
>
> Faz parte do **DOS — Design System Operation** (ver `../README-SISTEMA.md`). A produção é a camada 3 do sistema: onde as ideias viram ativos.

---

## Regra de ouro

> **Estrutura primeiro, conteúdo depois.**

Nenhuma produção começa sem uma casa. Antes de gravar, editar ou publicar seja o que for, cada produção nasce com a sua **ficha-mestra** (`templates/template-projeto-producao.md`), que a acompanha da ideia ao arquivo. Nada de improvisar a localização de ficheiros nem de saltar fases. A estrutura é o que te dá clareza, escala e sanidade quando o volume crescer.

---

## O que é o Modelo de Produção

Não produzes episódios soltos. Operas uma **linha de montagem** que pega em dados brutos e devolve ativos organizados e reutilizáveis. Este modelo transforma criatividade em processo previsível — sem matar a criatividade, mas dando-lhe uma estrutura em que assentar.

És o CEO desta operação. O modelo existe para poderes **delegar, automatizar e escalar** sem perder qualidade nem perder o controlo do que está feito.

---

## O fluxo único: CAPTURA → TRANSFORMAÇÃO → ORGANIZAÇÃO FINAL

Tudo o que se produz percorre o mesmo caminho de três tempos. Este é o coração do DOS e do Modelo de Produção:

```
   CAPTURA                 TRANSFORMAÇÃO                ORGANIZAÇÃO FINAL
 (dados brutos)         (produção por fases/SOP)        (arrumado na árvore DOS)

  _inbox/            ┌─────────────────────────────┐         memoria/
  ficha-mestra   ──▶ │ 01 Ideação                  │ ──▶     arquivo-episodios/
  ideias             │ 02 Pré-produção             │         decision-log
  pesquisa           │ 03 Gravação                 │         inventário
                     │ 04 Pós-produção             │         (reutilização
                     │ 05 Publicação               │          e ensino futuro)
                     │ 06 Distribuição             │
                     │ 07 Análise                  │
                     └─────────────────────────────┘
```

- **CAPTURA** — dados brutos entram: a ideia, a pesquisa, o material da gravação. Vivem primeiro no `../_inbox/` e na ficha-mestra do projeto. Nada se perde.
- **TRANSFORMAÇÃO** — a produção acontece por fases e SOPs (ver `fases/` e `sops/`). Cada fase recebe algo, transforma-o e entrega para a fase seguinte.
- **ORGANIZAÇÃO FINAL** — o resultado é arrumado na árvore do DOS: o episódio arquiva em `../memoria/arquivo-episodios/`, os dados produzidos ficam disponíveis para reutilização e ensino futuro, as decisões vão para `../memoria/decision-log.md`.

> Toda a produção deve poder ser lida por este triângulo. Se não sabes em que tempo estás (capturar, transformar ou arrumar), pára e localiza-te.

---

## Como reforça o DOS

O Modelo de Produção não é uma ilha — é a mão que executa os princípios do sistema:

- **Serve a identidade** (`../marca/`): cada produção respeita a missão, o posicionamento e as brand guidelines.
- **Executa a estratégia** (`../estrategia/`): cada produção serve um pilar de conteúdo e uma meta.
- **Alimenta a memória** (`../memoria/`): tudo o que se produz é arquivado e transformado em conhecimento reutilizável.
- **Presta contas à revisão** (`../revisao/`): os dados de cada produção fecham o ciclo e ajustam o rumo.

---

## Índice do Manual

### Fases da produção (`fases/`)
O caminho da produção, uma fase por ficheiro. Cada fase tem objetivo, entradas, passos/checklist, saídas, responsável e ligação à fase seguinte.

| # | Fase | Ficheiro | Tempo do fluxo |
|---|------|----------|----------------|
| 01 | Ideação | [`fases/01-ideacao.md`](fases/01-ideacao.md) | CAPTURA |
| 02 | Pré-produção | [`fases/02-pre-producao.md`](fases/02-pre-producao.md) | CAPTURA → TRANSFORMAÇÃO |
| 03 | Gravação | [`fases/03-gravacao.md`](fases/03-gravacao.md) | CAPTURA (material) |
| 04 | Pós-produção | [`fases/04-pos-producao.md`](fases/04-pos-producao.md) | TRANSFORMAÇÃO |
| 05 | Publicação | [`fases/05-publicacao.md`](fases/05-publicacao.md) | TRANSFORMAÇÃO |
| 06 | Distribuição | [`fases/06-distribuicao.md`](fases/06-distribuicao.md) | TRANSFORMAÇÃO |
| 07 | Análise | [`fases/07-analise.md`](fases/07-analise.md) | ORGANIZAÇÃO FINAL |

> A visão rápida e as checklists condensadas continuam em [`pipeline-episodio.md`](pipeline-episodio.md). As `fases/` são a versão detalhada e operável de cada etapa.

### SOPs — Procedimentos Operacionais Padrão (`sops/`)
As receitas passo a passo das tarefas recorrentes. Ver [`sops/README.md`](sops/README.md) para saber como se escreve e organiza um SOP.

| SOP | Ficheiro |
|-----|----------|
| Como construir um guião | [`sops/sop-guiao.md`](sops/sop-guiao.md) |
| Onboarding do convidado | [`sops/sop-onboarding-convidado.md`](sops/sop-onboarding-convidado.md) |
| Parceria com cliente | [`sops/sop-parceria-cliente.md`](sops/sop-parceria-cliente.md) |
| Distribuição multicanal / repurposing | [`sops/sop-distribuicao-multicanal.md`](sops/sop-distribuicao-multicanal.md) |

### Templates (`templates/`)
Documentos prontos a copiar por cada nova produção.

| Template | Ficheiro | Para que serve |
|----------|----------|----------------|
| **Ficha-mestra de projeto** | [`templates/template-projeto-producao.md`](templates/template-projeto-producao.md) | **O documento central.** Organiza todos os dados de uma produção, da ideia ao arquivo. |
| Ficha de episódio | [`templates/template-episodio.md`](templates/template-episodio.md) | Painel de controlo do episódio pelas 7 etapas. |
| Peça de conteúdo | [`templates/template-conteudo.md`](templates/template-conteudo.md) | Estruturar qualquer peça derivada. |
| Guião | [`templates/template-guiao.md`](templates/template-guiao.md) | Estrutura de guião pronta a preencher. |
| Briefing do convidado | [`templates/template-briefing-convidado.md`](templates/template-briefing-convidado.md) | Briefing enviado ao convidado. |
| Funil do podcast | [`templates/template-funil-podcast.md`](templates/template-funil-podcast.md) | Desenhar topo/meio/fundo e conversão. |
| Distribuição / repurposing | [`templates/template-distribuicao-repurposing.md`](templates/template-distribuicao-repurposing.md) | Plano de repurposing por episódio. |

### Canais (`canais/`)
Canais de captação e conversão e projetos de comunicação da marca. Ver [`canais/README.md`](canais/README.md).

### Automações (`automacoes/`)
O blueprint de automações da operação: onde vivem, o que disparam e que dados cruzam, ao longo dos cinco domínios (produção, distribuição, funil, CRM/follow-up, dados & aprendizagem). Ver [`automacoes/README.md`](automacoes/README.md).

---

## Como usar (arranque rápido)

1. **Nasce a ideia?** Copia a [`ficha-mestra de projeto`](templates/template-projeto-producao.md) para um novo ficheiro e dá-lhe um número. A ficha viaja com a produção do início ao fim.
2. **Segue as fases por ordem**, de [`01-ideacao.md`](fases/01-ideacao.md) a [`07-analise.md`](fases/07-analise.md). Cada fase diz o que recebe, o que faz e para onde entrega.
3. **Usa os SOPs** quando uma fase te pedir uma tarefa recorrente (guião, onboarding, parceria, distribuição).
4. **Fecha o ciclo:** arquiva em `../memoria/arquivo-episodios/`, regista decisões em `../memoria/decision-log.md` e leva aprendizagens para `../revisao/retrospetiva-mensal.md`.

> Todos os ficheiros deste manual estão cruzados por links. Lê-o como um só documento: começa aqui, segue os links, volta aqui.
