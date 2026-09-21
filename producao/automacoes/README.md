# Blueprint de Automações — a vantagem do produtor

> O manual das **automações** da camada de Produção (`producao/automacoes/`). Explica *onde* vivem as automações do DOS, *o que* disparam e *que dados cruzam* — para que a operação corra sozinha nas partes estáveis e te liberte para o que só tu podes fazer: a relação e a decisão.
>
> Faz parte do **DOS — Design System Operation** (ver [`../../README-SISTEMA.md`](../../README-SISTEMA.md)) e do [Manual de Produção](../README.md). Lê-o depois de perceberes as [fases](../fases/) e os [SOPs](../sops/) — a automação não substitui o processo, executa-o.

---

## Tese estratégica

> **A automação é a vantagem do produtor.** Não é para poupar cliques — é para poderes cruzar dados, aprendizagens e produções e **recombiná-las para épocas, ambientes e audiências diferentes** até chegares ao público, **sem perder ordem**.

Um criador solto faz um episódio de cada vez e recomeça do zero. Tu operas um sistema: cada produção deixa dados, cada dado alimenta a próxima decisão, e o mesmo material volta ao mercado reempacotado quando o momento serve. A automação é o tecido que liga tudo isto sem exigir a tua atenção constante. **És o CEO da operação; as automações são a tua equipa que nunca dorme** — mas trabalham dentro do teu framework, não à margem dele.

> Regra que atravessa todo este documento: **automatiza o fluxo, nunca o julgamento.** O que é repetível e estável, delega à máquina. O que envolve relação, gosto ou risco, mantém humano.

---

## Onde vivem as automações — o fluxo DOS

As automações não são um add-on: distribuem-se ao longo do mesmo fluxo de três tempos do DOS. Localiza cada automação neste triângulo antes de a construíres.

```
   CAPTURA                    TRANSFORMAÇÃO                   ORGANIZAÇÃO FINAL
 (dados brutos entram)   (produção + distribuição correm)   (tudo volta à memória)

  ideia no _inbox     ┌──────────────────────────────────┐      métricas agregadas
  formulário/lead ──▶ │  A) Produção                     │ ──▶  aprendizagens → memoria/
  material gravado    │  B) Distribuição multicanal      │      motor de recombinação
  contacto novo       │  C) Captação & conversão (funil) │      loop 07 → 01
                      │  D) Atendimento & follow-up (CRM)│
                      │  E) Dados & aprendizagem         │
                      └──────────────────────────────────┘
```

- **CAPTURA** — gatilhos que trazem dados para dentro: uma ideia, um lead, o fim de uma gravação, um contacto novo.
- **TRANSFORMAÇÃO** — automações que movem o trabalho pelas fases e pelos canais sem intervenção manual.
- **ORGANIZAÇÃO FINAL** — automações que devolvem tudo à [`memoria/`](../../memoria/) e realimentam a ideação.

---

## Nota sobre ferramentas

> **Este blueprint não assume o teu stack.** Em cada automação, a ferramenta aparece como um espaço a preencher: **`[a tua ferramenta]` (ex.: Zapier/Make · Notion/ClickUp · Gmail · um CRM · …)**. As sugestões entre parênteses são apenas defaults recomendados — troca-as pelo que já usas.
>
> Preenche o teu stack real em [`mapa-ferramentas.md`](mapa-ferramentas.md) uma vez. Depois, ao construíres cada automação, sabes exatamente que ferramenta liga a quê.
>
> E antes de pagares seja o que for: vê [`custo-e-camadas.md`](custo-e-camadas.md) — a vista de custo do mesmo stack, com **até onde cada função é gratuita e o ponto exato em que começa a pagar**. Constrói a base no gratuito; paga só quando uma operação vira gargalo.

---

## As cinco domínios de automação

Cada domínio abaixo é um lugar onde as automações vivem. As linhas das tabelas são **exemplos prontos a preencher** — o padrão de cada automação, não factos sobre a tua operação. Adapta gatilhos, ações e ferramentas ao teu caso.

Colunas de cada tabela:

- **Gatilho (trigger)** — o evento que dispara a automação.
- **Ação(ões)** — o que acontece automaticamente.
- **Ferramenta `[a tua ferramenta]`** — onde corre (preenche com o teu stack).
- **Canais ligados** — que sistemas/canais toca.
- **Dados que cruzam** — a informação que passa de um lado para o outro (o valor real).

---

### A) Automações de Produção — *dentro do workflow & framework*

> Antes da distribuição. Estas automações movem uma produção pelas [fases 01–07](../fases/) sem que tenhas de arrastar tarefas à mão. Servem a **ficha-mestra** ([`../templates/template-projeto-producao.md`](../templates/template-projeto-producao.md)) como fonte de verdade.

| Gatilho (trigger) | Ação(ões) | Ferramenta `[a tua ferramenta]` | Canais ligados | Dados que cruzam |
|---|---|---|---|---|
| Ideia capturada no [`_inbox`](../../_inbox/) | Cria ficha-mestra a partir do [template](../templates/template-projeto-producao.md) + tarefa em [`01-ideacao`](../fases/01-ideacao.md) | `[a tua ferramenta]` (ex.: Notion/ClickUp + Zapier/Make) | Inbox · base de ops | Título, pilar de conteúdo, nº de projeto |
| Gravação agendada (data marcada) | Envia convite + lembretes ao convidado; abre onboarding | `[a tua ferramenta]` (ex.: um calendário + Gmail) | Calendário · email | Data, briefing, links — liga a [`sop-onboarding-convidado`](../sops/sop-onboarding-convidado.md) |
| Ficheiro de gravação carregado | Dispara transcrição → captura de insights → guarda na ficha (secção 10) | `[a tua ferramenta]` (ex.: transcrição + base de ops) | Armazenamento · base de ops | Transcrição, insights, citações-chave |
| Mudança de fase na ficha-mestra | Atualiza estado no dashboard + notifica quem entra a seguir | `[a tua ferramenta]` (ex.: base de ops + notificações) | Base de ops · equipa | Fase atual, responsável, prazo |
| Produção marcada como "Pronto" | Cria checklist de publicação e agenda em [`05-publicacao`](../fases/05-publicacao.md) | `[a tua ferramenta]` (ex.: base de ops + agendador) | Base de ops · agendador | Data de publicação, ficheiros finais |

---

### B) Automações de Distribuição multicanal

> Depois de publicar. Transformam um episódio em muitas peças, por canal, sem trabalho manual repetido. Servem o [`sop-distribuicao-multicanal`](../sops/sop-distribuicao-multicanal.md) e o [`template-distribuicao-repurposing`](../templates/template-distribuicao-repurposing.md).

| Gatilho (trigger) | Ação(ões) | Ferramenta `[a tua ferramenta]` | Canais ligados | Dados que cruzam |
|---|---|---|---|---|
| Episódio publicado | Gera as peças de repurposing por canal a partir do [plano](../templates/template-distribuicao-repurposing.md) | `[a tua ferramenta]` (ex.: base de ops + Zapier/Make) | Todos os canais | Título, hooks, timestamps, citações |
| Peças aprovadas | Agenda cross-channel (YouTube · Spotify · IG · TikTok · newsletter · website) | `[a tua ferramenta]` (ex.: um agendador de publicação) | Redes · newsletter · website | Copy por canal, hashtags, links |
| Novo item no RSS do podcast | Auto-post do episódio nos canais próprios | `[a tua ferramenta]` (ex.: Zapier/Make) | RSS · redes · website | Link do episódio, resumo, capa |
| Vídeo longo exportado | Corte automático em clips + legendas geradas | `[a tua ferramenta]` (ex.: edição/legendagem automática) | Vídeo · shorts/reels | Clips, legendas, ganchos |
| Peça publicada | Regista link publicado de volta na ficha-mestra (secção 13) | `[a tua ferramenta]` (ex.: base de ops) | Base de ops | URLs por canal, data, canal |

---

### C) Automações de Captação & Conversão — *o funil*

> Movem estranhos de terreno alugado (plataformas) para terreno teu (lista, comunidade, website). Servem os [`canais/`](../canais/README.md) e o [funil](../templates/template-funil-podcast.md).

| Gatilho (trigger) | Ação(ões) | Ferramenta `[a tua ferramenta]` | Canais ligados | Dados que cruzam |
|---|---|---|---|---|
| Submissão de formulário / landing | Cria/atualiza lead no CRM + aplica tag e segmento | `[a tua ferramenta]` (ex.: formulários + um CRM) | Formulário · CRM | Email, origem, isco, tag/segmento — liga a [`canais/`](../canais/README.md) |
| Novo subscritor de lead magnet | Entrega automática do recurso + confirmação | `[a tua ferramenta]` (ex.: email/newsletter) | Email · armazenamento | Recurso, email, data de entrega |
| Lead entra num segmento | Arranca sequência de nurture / newsletter | `[a tua ferramenta]` (ex.: email/newsletter + Zapier/Make) | Email · CRM | Sequência, comportamento, aberturas |
| Interação repetida (abriu/clicou N vezes) | Atualiza scoring do lead + notifica se atinge limiar | `[a tua ferramenta]` (ex.: um CRM) | CRM · notificações | Score, atividade, estágio do funil |
| Lead atinge score "quente" | Passa para pipeline de conversão + tarefa de contacto | `[a tua ferramenta]` (ex.: um CRM) | CRM · calendário | Score, contexto, próximo passo |

---

### D) Automações de Atendimento & Follow-up — *CRM*

> O motor de relação. Garantem que ninguém cai por entre as fendas: convidados, leads e clientes/parcerias recebem sempre o passo seguinte. Detalhe completo em [`crm-follow-up.md`](crm-follow-up.md).

| Gatilho (trigger) | Ação(ões) | Ferramenta `[a tua ferramenta]` | Canais ligados | Dados que cruzam |
|---|---|---|---|---|
| Novo convidado confirmado | Cria registo no CRM + arranca sequência de onboarding | `[a tua ferramenta]` (ex.: um CRM + Gmail) | CRM · email | Nome, episódio, datas — liga a [`sop-onboarding-convidado`](../sops/sop-onboarding-convidado.md) |
| Episódio do convidado publicado | Envia agradecimento + pedido de partilha + próximos passos | `[a tua ferramenta]` (ex.: um CRM + email) | CRM · email · redes | Link do episódio, kit de partilha |
| Oportunidade de parceria/cliente | Entra no pipeline de vendas + cria proposta e follow-ups | `[a tua ferramenta]` (ex.: um CRM) | CRM · email | Âmbito, valor, estágio — liga a [`sop-parceria-cliente`](../sops/sop-parceria-cliente.md) |
| Proposta enviada sem resposta (X dias) | Lembrete de follow-up automático (humano no loop) | `[a tua ferramenta]` (ex.: um CRM + calendário) | CRM · email | Data de envio, estágio, nota |
| Cliente/parceria fechada | Cria tarefas de entrega + acompanhamento pós-entrega | `[a tua ferramenta]` (ex.: um CRM + base de ops) | CRM · base de ops | Entregáveis, prazos, contacto |

---

### E) Automações de Dados & Aprendizagem — *o diferenciador*

> Aqui está a vantagem composta. Estas automações fecham o ciclo: recolhem o que aconteceu, transformam-no em conhecimento e devolvem-no à ideação. Alimentam a [`memoria/`](../../memoria/) e o loop [`07-analise`](../fases/07-analise.md) → [`01-ideacao`](../fases/01-ideacao.md).

| Gatilho (trigger) | Ação(ões) | Ferramenta `[a tua ferramenta]` | Canais ligados | Dados que cruzam |
|---|---|---|---|---|
| Fim de ciclo (semana/mês) | Agrega métricas de cada canal num painel único | `[a tua ferramenta]` (ex.: analytics + base de ops) | Todos os canais | Alcance, retenção, conversão por canal |
| Insight capturado num episódio | Arquiva no banco de aprendizagens em [`memoria/`](../../memoria/) | `[a tua ferramenta]` (ex.: base de ops) | Base de ops · memória | Insight, contexto, tema, tags |
| Produção passada identificada como "forte" | **Motor de recombinação:** reempacota para nova época/ambiente/audiência | `[a tua ferramenta]` (ex.: base de ops + Zapier/Make) | Todos os canais | Material original, novo formato, novo público |
| Fecho de análise ([`07`](../fases/07-analise.md)) | **Loop de feedback:** alimenta a ideação ([`01`](../fases/01-ideacao.md)) com o que funcionou | `[a tua ferramenta]` (ex.: base de ops) | Análise · ideação | O que resultou, o que repetir, o que cortar |
| Padrão detetado nos dados | Cria sugestão de tema/formato no [`_inbox`](../../_inbox/) para avaliação | `[a tua ferramenta]` (ex.: base de ops + Zapier/Make) | Dados · inbox | Padrão, evidência, hipótese |

---

## Como os domínios se ligam

Nenhum domínio vive isolado. O valor está no circuito fechado: a produção alimenta a distribuição, que alimenta o funil, que alimenta o CRM, e tudo deságua nos dados — que voltam a alimentar a produção.

```
      ┌──────────────────────────────────────────────────────────────┐
      │                                                              │
      ▼                                                              │
  ┌─────────────┐   ┌────────────────┐   ┌──────────────────────┐   │
  │ A) PRODUÇÃO │──▶│ B) DISTRIBUIÇÃO│──▶│ C) CAPTAÇÃO/CONVERSÃO │   │
  └─────────────┘   └────────────────┘   └──────────┬───────────┘   │
                                                     │               │
                                                     ▼               │
                          ┌──────────────────────────────────┐      │
                          │ D) CRM / ATENDIMENTO & FOLLOW-UP  │      │
                          └──────────────────┬───────────────┘      │
                                             │                      │
                                             ▼                      │
                          ┌──────────────────────────────────┐      │
                          │ E) DADOS & APRENDIZAGEM           │──────┘
                          │ (agrega, arquiva na MEMÓRIA,      │
                          │  recombina e realimenta a ideação)│
                          └──────────────────────────────────┘
```

> O sentido do circuito é sempre o mesmo: **os dados voltam sempre à MEMÓRIA e à ideação.** Uma automação que recolhe dados e não os devolve ao sistema é um beco sem saída — corrige-a.

---

## Princípios de automação

Antes de construíres qualquer automação, passa-a por estes princípios:

1. **Automatiza só processos estáveis.** Se ainda estás a descobrir como fazer algo, fá-lo à mão primeiro. Automatizar o caos só o acelera. Documenta o SOP, estabiliza-o, *depois* automatiza.
2. **Humano no loop onde há relação.** Convidados, clientes e parcerias sentem o que é automático de mais. A máquina prepara o passo (rascunho, lembrete, registo); tu dás a cara. Nunca automatizes o "sim" nem o "obrigado" que importam.
3. **Os dados voltam sempre à memória.** Toda a automação deve deixar rasto em [`../../memoria/`](../../memoria/). Se corre e não regista, não aprendeste nada com ela.
4. **Nunca automatizes segredos nem credenciais.** Tokens, palavras-passe e dados sensíveis não entram em automações abertas nem em commits. Segue a [`../../seguranca/politica-acesso-backup.md`](../../seguranca/politica-acesso-backup.md).
5. **Uma fonte de verdade.** A ficha-mestra ([`../templates/template-projeto-producao.md`](../templates/template-projeto-producao.md)) e o CRM mandam. As automações escrevem *nelas*, não criam realidades paralelas.
6. **Simples e observável.** Começa por uma automação de um passo que consegues ver falhar. Só encadeias quando confias em cada elo. Uma automação que ninguém percebe é uma dívida escondida.

---

## Ligações

- Manual de Produção: [`../README.md`](../README.md)
- **O Arsenal — manual canónico de ferramentas por nível (Documento 04):** [`arsenal.md`](arsenal.md)
- **O Arsenal — verificação de preços & alternativas (anexo de pesquisa):** [`arsenal-pesquisa.md`](arsenal-pesquisa.md)
- Mapa de ferramentas (preenche o teu stack): [`mapa-ferramentas.md`](mapa-ferramentas.md)
- Custo & camadas (grátis vs pago por função e operação): [`custo-e-camadas.md`](custo-e-camadas.md)
- CRM & follow-up (detalhe): [`crm-follow-up.md`](crm-follow-up.md)
- Ficha-mestra, secção 14 (Automações): [`../templates/template-projeto-producao.md`](../templates/template-projeto-producao.md)
- Canais de captação & conversão: [`../canais/README.md`](../canais/README.md)
- Distribuição multicanal: [`../sops/sop-distribuicao-multicanal.md`](../sops/sop-distribuicao-multicanal.md)
- Memória (dados e aprendizagens): [`../../memoria/`](../../memoria/)
- Segurança (segredos e acessos): [`../../seguranca/politica-acesso-backup.md`](../../seguranca/politica-acesso-backup.md)
