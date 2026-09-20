# Custo & Camadas — grátis vs pago, por função e por operação

> A folha que declara, para cada função e cada operação da tua automação, **até onde é gratuito e onde começa a pagar**. Serve para construíres a base inteira no gratuito e saberes, com números, o momento exato em que uma função te obriga a subir de plano — para que pagar seja **uma decisão de CEO**, não um susto na fatura.
>
> Faz parte do [Blueprint de Automações](README.md) e é a **vista de custo** do mesmo stack que declaras no [`mapa-ferramentas.md`](mapa-ferramentas.md). Lê primeiro o mapa: as funções são as mesmas, aqui só lhes acrescentamos a camada de preço.

---

## 1. Princípio — a base no gratuito, o pagamento como decisão

> **Estrutura primeiro, custo depois.** Constrói a operação toda em camadas gratuitas. Só pagas quando uma operação vira **gargalo** — quando o custo do teu tempo, ou o teto de um limite, ultrapassa o preço do plano que o resolve.

Isto liga-se diretamente à regra de ouro do DOS (ver [`../../README-SISTEMA.md`](../../README-SISTEMA.md)): **defines onde cada coisa vive antes de a encheres**. Aplicado ao dinheiro, quer dizer:

- **O gratuito é o teto de partida, não uma falha.** Quase toda a operação de um criador a solo cabe em planos gratuitos durante muito tempo. Assume isso como base.
- **Pagar é comprar a saída de um gargalo concreto**, não "ter a versão a sério". Antes de pagares, nomeia a operação que está bloqueada e o limite que a bloqueia.
- **Conhece o teto de cada função *antes* de lá chegares.** Assim, quando o atingires, já sabes que era esperado e que a decisão de pagar estava tomada em princípio — só falta confirmar que a operação já justifica.
- **Uma fonte de verdade também para custos.** Cada decisão de upgrade fica registada no [`memoria/decision-log.md`](../../memoria/decision-log.md): que operação, que limite, que preço, porquê agora.

O objetivo desta folha é tornar visível **"o caminho percorrido em cada operação"** em termos de custo: por onde passa, onde é grátis, e o ponto exato em que cruza para pago.

---

## 2. Tabela mestra por função

Uma linha por cada uma das **13 funções** do [`mapa-ferramentas.md`](mapa-ferramentas.md). As colunas de ferramenta recomendada estão preenchidas com **defaults comuns** para arrancar no gratuito — **não afirmam que usas esses produtos**. A tua ferramenta real vai na última coluna.

> ⚠️ **Valores indicativo — confirmar.** Preços e limites de planos mudam com frequência e são sensíveis à data. Todos os números abaixo foram **verificados a 2026-09-20** por pesquisa web e servem de ordem de grandeza. **Confirma no site do fornecedor antes de decidir.** Onde a pesquisa foi inconclusiva, está escrito `confirmar` em vez de um número inventado.

| Função | Ferramenta (opção gratuita, ex.: …) | O que o gratuito dá | Limite (onde bate o teto) | Onde começa a pagar (plano + preço ~) | Operação que suporta | `[a tua ferramenta]` |
|---|---|---|---|---|---|---|
| **Hub de automação** (liga tudo) | Zapier / Make / n8n (self-host) | Zapier: 100 tarefas/mês, Zaps de 2 passos. Make: 1 000 operações/mês, 2 cenários ativos. n8n self-host: execuções ilimitadas | Zapier: passar de 100 tarefas/mês **ou** precisar de > 2 passos (filtros, paths, multi-step). Make: passar de 1 000 ops/mês ou 2 cenários | Zapier Pro ~19,99 €/mês (anual). Make Core ~9–12 €/mês. n8n Cloud Starter ~24 €/mês (self-host continua grátis, paga-se só o servidor ~5 €/mês) | A · B · C · D · E (é o motor de todas) | `[preencher]` |
| **Base de dados / ops** (fonte de verdade) | Notion / ClickUp | Notion (1 membro): blocos e páginas ilimitados, histórico 7 dias, 10 convidados, ficheiros até 5 MB. ClickUp: tarefas e membros ilimitados, 60 MB de armazenamento, 100 ações de automação/mês | Notion: precisar de histórico > 7 dias, ficheiros grandes, ou entrar 2.º membro (aparece limite de 1 000 blocos). ClickUp: passar de 60 MB ou de 100 automações/mês | Notion Plus ~10 €/membro/mês (anual). ClickUp Unlimited ~7 €/utilizador/mês (anual) | A · E (ficha-mestra, dashboard, memória) | `[preencher]` |
| **CRM** (relação e pipeline) | HubSpot Free | Até 1 000 contactos, 2 utilizadores, 1 pipeline de negócios, automação de **1 passo apenas**, marca HubSpot nos emails/formulários | Passar de 1 000 contactos, querer > 1 pipeline, ou precisar de automação multi-passo (rotação de leads, nurture, notificações por comportamento) | HubSpot Starter ~15 €/lugar/mês (anual); tira a marca e abre automação multi-passo | C · D (contactos, estados, follow-up) | `[preencher]` |
| **Email / newsletter** | MailerLite / Mailchimp | MailerLite: 250 subscritores, 2 500 envios/mês, 3 automações, 3 formulários, 1 landing. Mailchimp: 250 contactos, 500 envios/mês | Passar de 250 subscritores (o teto real do gratuito em ambas), ou de 2 500 envios/mês, ou precisar de mais automações/sequências | MailerLite Comfort ~12 €/mês (250+ subs). Mailchimp Essentials ~13 €/mês (500 contactos) | C · D (nurture, entregas, follow-up) | `[preencher]` |
| **Gravação** (áudio/vídeo do episódio) | `[a tua ferramenta]` (ex.: a tua app de gravação) | `confirmar` — depende da ferramenta (muitas dão gravação-base grátis com limite de horas/qualidade) | `confirmar` — tipicamente: nº de horas gravadas/mês, resolução, ou nº de convidados | `confirmar` no site do fornecedor | A (material do episódio) | `[preencher]` |
| **Edição / transcrição** | Otter.ai (transcrição) + `[a tua ferramenta]` (edição) | Otter: 300 min de transcrição/mês, 30 min por conversa, 3 importações de ficheiro (vitalícias, não mensais) | Otter: passar de 300 min/mês, precisar de conversas > 30 min, ou importar mais ficheiros gravados. Edição: `confirmar` | Otter Pro ~8,33 €/utilizador/mês (anual) / ~17 €/mês (mensal). Edição: `confirmar` | A (transcrição alimenta a captura de insights) | `[preencher]` |
| **Agendador de publicação** | Buffer | 3 canais ligados, 10 publicações em fila por canal | Passar de 3 canais, ou precisar de fila > 10 publicações por canal (agendar em lote com antecedência) | Buffer Essentials ~5 €/canal/mês (anual) — a fatura escala por canal, não é fixa | B (distribuição multicanal) | `[preencher]` |
| **Formulários** | Google Forms / Tally | Google Forms: formulários e respostas ilimitados (com conta Google grátis). Tally: formulários e respostas ilimitados, ~99% das funções livres | Google Forms: precisar de lógica/branding avançados. Tally: querer tirar a marca, domínio próprio, submissões parciais | Tally Pro ~29 €/mês (tira marca, domínio próprio, colaboração). Google Forms: incluído no Workspace pago | C (captação de leads) | `[preencher]` |
| **Landing pages** | Carrd | 3 sites, funções core, subdomínio carrd.co com badge "Made with Carrd" | Querer domínio próprio, formulários, tirar o badge, ou > 3 sites | Carrd Pro Lite ~9 €/ano (domínio próprio, sem badge); Standard ~19 €/ano (10 sites) | C (conversão de ofertas) | `[preencher]` |
| **Website** | WordPress.com (grátis) / Google Sites | WordPress.com Free: site em subdomínio .wordpress.com, sem domínio próprio. Google Sites: grátis com conta Google | WordPress.com: querer domínio próprio, tirar publicidade/branding, temas premium | WordPress.com Personal ~4 €/mês (anual, inclui domínio no 1.º ano) | B · C (casa da marca, agrega tudo) | `[preencher]` |
| **Analytics** | Google Analytics (GA4) + analytics nativas dos canais | GA4 grátis; cada plataforma (YouTube, Spotify, IG…) dá as suas métricas nativas sem custo | Precisar de agregação automática de várias fontes num painel, ou de retenção de dados/relatórios avançados | `confirmar` — a agregação costuma cair na base de ops (ver essa linha) ou numa ferramenta de BI paga | E (métricas que alimentam o painel) | `[preencher]` |
| **Agendamento / calendário** | Google Calendar | Grátis com conta Google: eventos, convites, lembretes ilimitados | Querer marcação self-service com o público (páginas de reserva), múltiplos tipos de evento, integrações avançadas | Ferramenta de marcação (ex.: Calendly): plano pago `confirmar` — o Google Calendar em si mantém-se grátis | A · D (gravações, chamadas, lembretes) | `[preencher]` |
| **Armazenamento** | Google Drive | 15 GB grátis (partilhados com Gmail e Fotos) | Passar de 15 GB — brutos de vídeo enchem isto depressa | Google One a partir de ~2 €/mês (100 GB) ou Workspace Business Starter ~7 €/utilizador/mês (30 GB agrupados + email no domínio) | A · B (ficheiros brutos e finais) | `[preencher]` |

> Nota transversal: o **email/conta base** (Gmail pessoal) é grátis com 15 GB. Só passas a **Google Workspace** (~7 €/utilizador/mês, Business Starter) quando quiseres email no teu domínio (`tu@amarca.com`), controlos de admin e mais armazenamento agrupado — não antes.

---

## 3. Caminho de custo por operação (A–E)

Para cada um dos 5 domínios de automação do [Blueprint](README.md), o **caminho gratuito** e o **ponto exato onde a operação cruza para pago**. É o "caminho percorrido em cada operação" traduzido em custo.

### A) Produção — *dentro do workflow & framework*
- **Caminho grátis:** ideia no `_inbox` → ficha-mestra na base de ops (Notion/ClickUp free) → transcrição da gravação (Otter free, 300 min/mês) → insights arquivados. Hub gratuito (Zapier 100 tarefas/mês ou Make 1 000 ops/mês) a costurar os passos.
- **Cruza para pago quando:** as gravações passam de **~300 min de transcrição/mês** (Otter Pro), **ou** os brutos de vídeo enchem os **15 GB** do Drive (Google One / Workspace), **ou** o encadeamento ficha→transcrição→insights exige **> 2 passos** ou passa das **100 tarefas/mês** do hub (Zapier Pro / Make Core).

### B) Distribuição multicanal
- **Caminho grátis:** episódio publicado → agendas manualmente até **3 canais** no Buffer free (10 posts em fila por canal) → registas o link de volta na ficha.
- **Cruza para pago quando:** ligas o **4.º canal**, **ou** queres agendar **> 10 publicações em fila** por canal (lote com antecedência) → Buffer Essentials (~5 €/canal/mês, escala por canal). Se o auto-post por RSS exigir mais volume no hub, some-se o custo do hub pago.

### C) Captação & Conversão — *o funil*
- **Caminho grátis:** formulário (Google Forms / Tally free) → lead cai no CRM (HubSpot free, até 1 000 contactos) → entrega do lead magnet e newsletter (MailerLite free, 250 subscritores) → landing em Carrd free.
- **Cruza para pago quando:** passas de **250 subscritores** na newsletter (o teto que chega primeiro — MailerLite Comfort), **ou** de **1 000 contactos** no CRM (HubSpot Starter), **ou** precisas de **nurture/scoring multi-passo** (pago-only no CRM), **ou** queres **domínio próprio / sem badge** na landing (Carrd Pro).

### D) Atendimento & Follow-up — *CRM*
- **Caminho grátis:** convidado/lead entra no CRM (HubSpot free) → sequência de onboarding e agradecimentos → lembretes de follow-up com humano no loop, apoiados no Google Calendar grátis.
- **Cruza para pago quando:** os follow-ups deixam de caber em **automação de 1 passo** (HubSpot free só dá isso) e precisas de **sequências multi-passo, rotação e notificações por comportamento** → HubSpot Starter (~15 €/lugar/mês). Também cruza se ultrapassares os **1 000 contactos**.

### E) Dados & Aprendizagem — *o diferenciador*
- **Caminho grátis:** métricas nativas de cada canal + GA4 (grátis) → agregadas à mão ou por automação leve na base de ops → insights e recombinações arquivados na [`memoria/`](../../memoria/).
- **Cruza para pago quando:** queres **agregação automática de várias fontes** num painel único e isso exige **muitos passos/execuções** no hub (passa das 100 tarefas/mês do Zapier ou dos 1 000 ops/mês do Make), **ou** o histórico/relatórios da base de ops ficam curtos (Notion Plus / ClickUp Unlimited), **ou** precisas de uma ferramenta de BI paga (`confirmar`).

> Padrão a reter: na maioria das operações, **o primeiro teto a bater é sempre um de dois** — o **volume da lista/contactos** (250 subs → 1 000 contactos) ou o **número de passos/tarefas do hub**. São esses os dois gargalos que, quase sempre, decidem quando começas a pagar.

---

## 4. Quadro de decisão — quando faz sentido subir de camada

Sobe de camada (paga) quando **pelo menos um** destes gatilhos se confirmar. Um só, de forma pontual, não chega — a exceção não justifica plano.

1. **Limite atingido de forma recorrente.** Bates no teto de uma função **vários ciclos seguidos** (ex.: passas dos 250 subscritores todos os meses), não uma vez por acaso.
2. **Tempo manual > preço do plano.** O contorno manual do limite (agendar à mão, exportar/colar dados, cortar transcrições) custa-te **mais horas do que o preço do upgrade** vale. Faz a conta: horas × valor da tua hora vs. €/mês.
3. **A operação bloqueia entrega ou receita.** O limite trava algo que gera dinheiro ou compromete uma entrega prometida (não consegues enviar a newsletter, o funil não fecha, a proposta fica parada).
4. **Precisas de um recurso que é pago-only.** A funcionalidade não existe no gratuito a nenhum preço de esforço — ex.: automação multi-passo no CRM, domínio próprio, tirar a marca de terceiros do que é teu.
5. **O gargalo trava a composição.** O limite impede o cruzamento de dados/recombinação que é a vantagem do sistema (ex.: não consegues agregar métricas nem realimentar a ideação).

### Sinais de que chegou a hora de pagar — checklist

- [ ] Bati no mesmo limite **≥ 2 ciclos** seguidos.
- [ ] O contorno manual já me custa **mais tempo (em €) do que o plano**.
- [ ] Um cliente, convidado ou subscritor **ficou por atender** por causa do teto.
- [ ] A funcionalidade que falta **não existe** em nenhum plano gratuito.
- [ ] Já **nomeei a operação** exata que o upgrade desbloqueia.
- [ ] Vou **registar a decisão** no [`memoria/decision-log.md`](../../memoria/decision-log.md).

> Se marcaste **2 ou mais**, o upgrade dessa função é uma decisão de CEO justificada. Se marcaste 0–1, aguenta no gratuito e reavalia no próximo ciclo.

---

## 5. Nota de manutenção

- **Preços e limites mudam.** Todos os números desta folha são **indicativo — confirmar** e foram verificados a **2026-09-20**. Trata-os como ordem de grandeza, não como verdade fixa.
- **Rever trimestralmente.** Liga esta folha ao ritmo de [`revisao/`](../../revisao/): uma vez por trimestre, reconfirma os tetos das funções que mais usas e atualiza a tabela mestra.
- **Registar cada upgrade.** Sempre que subires de camada, escreve no [`memoria/decision-log.md`](../../memoria/decision-log.md): função, limite atingido, plano escolhido, preço e a operação que desbloqueou. Assim o histórico de custo acompanha o histórico de decisões.
- **Sem segredos.** Contas, faturação e credenciais não entram aqui nem em commits — segue a [`../../seguranca/politica-acesso-backup.md`](../../seguranca/politica-acesso-backup.md).

---

## Ligações

- Blueprint de Automações: [`README.md`](README.md)
- Mapa de ferramentas (o teu stack real): [`mapa-ferramentas.md`](mapa-ferramentas.md)
- CRM & follow-up (detalhe): [`crm-follow-up.md`](crm-follow-up.md)
- Registo de decisões (upgrades): [`../../memoria/decision-log.md`](../../memoria/decision-log.md)
- Ritmo de revisão (trimestral): [`../../revisao/`](../../revisao/)
- Segurança (faturação, acessos, segredos): [`../../seguranca/politica-acesso-backup.md`](../../seguranca/politica-acesso-backup.md)
