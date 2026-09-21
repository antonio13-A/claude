# Registo de Decisões (Decision Log)

> O histórico das decisões que moldam o negócio. O objetivo é simples: daqui a seis meses saberes **o que** decidiste, **quando** e sobretudo **porquê**. Isto evita repetir erros, andar em círculos e desfazer boas decisões por esquecimento.

---

## Como usar

- Regista **decisões que importam**: estratégia, marca, formato, ferramentas, parcerias, preços, mudanças de rumo.
- Não registes tarefas do dia a dia — isto não é uma to-do list.
- Escreve o **porquê** com honestidade. É a parte mais valiosa.
- **Estado:** `Ativa` (em vigor), `Revista` (ajustada depois), `Revertida` (desfeita).

---

## Entradas

| Data | Contexto | Decisão | Porquê | Estado |
|------|----------|---------|--------|--------|
| 2026-09-19 | O conteúdo e os ativos andavam espalhados por várias ferramentas, sem histórico nem cópia de segurança. | Criar um repositório privado e versionado como sistema operativo do negócio (marca, estratégia, produção, memória, revisão, segurança). | Precisava de uma única fonte de verdade, com histórico via Git, para escalar o podcast como negócio sem perder nada e poder delegar/automatizar no futuro. | Ativa |
| 2026-09-21 | O "Arsenal" (Documento 04) — manual de ferramentas por nível, cinco departamentos, N0–N4 — vivia fora do DOS, e os preços não estavam verificados. | Integrar o Documento 04 fielmente em [`producao/automacoes/arsenal.md`](../producao/automacoes/arsenal.md) (números, escolhas e gatilhos do dono intactos) e criar o anexo de pesquisa [`producao/automacoes/arsenal-pesquisa.md`](../producao/automacoes/arsenal-pesquisa.md) com preços verificados a 2026-09-21 e alternativas. | O Arsenal é a versão da marca do stack genérico (mapa-ferramentas + custo-e-camadas); trazê-lo para o DOS dá uma fonte de verdade única e um caminho de decisão N0→N4 com preços conferidos, sem alterar as decisões do dono. | Ativa |
| 2026-09-21 | A pesquisa de preços (2026-09-21) conferiu o Documento 04 e faltava aplicar os achados ao Ciclo 4 sem mexer no manual canónico. | Produzir uma revisão datada da stack em [`revisao/revisao-stack-2026-09-21.md`](../revisao/revisao-stack-2026-09-21.md): conclui que a stack do Ciclo 4 (~250 €) se mantém e regista, uma a uma, as decisões abaixo. | Dar rasto formal e cruzado dos achados sem alterar o `arsenal.md` do dono; as mudanças de plano ficam a aguardar confirmação do António, as notas de facto ficam registadas. | Ativa |
| 2026-09-21 | Make passou de "operações" para "créditos" (ago/2025); o gatilho do Doc 04 dizia "cenários >10 mil ops/mês". | Manter Make Core no Ciclo 4 e reexpressar o gatilho em créditos, monitorizando o consumo real em vez de assumir "10 mil ops". | Nota de facto: 0 € de impacto (mantém ~30 €), mas o teto do grátis lê-se agora em créditos e pode bater mais cedo. | Ativa |
| 2026-09-21 | Everfit ganhou tier gratuito (até 5 atletas); o TrueCoach (~30 €) não tem grátis. Degrau D3 ainda futuro no Ciclo 4. | Quando o D3 precisar de app do atleta, começar no Everfit grátis em vez do TrueCoach pago; TrueCoach passa a opção quando chegar o gatilho de multi-técnico. | Poupança ~30 €/mês nesse degrau, sem afetar o Ciclo 4 agora. | Recomendada — a confirmar pelo António |
| 2026-09-21 | Circle deixou de ter plano gratuito e entra nos ~89 $/mês (Doc 04 dizia ~45 €); degrau D2 N2→N3 ainda futuro. | Adiar o Circle; esticar WhatsApp + Notion mais tempo e reavaliar alternativas do `arsenal-pesquisa` (ex.: Skool) antes de subir a D2 N3. | Evita ~89 $/mês prematuros, sem afetar o Ciclo 4 agora. | Recomendada — a confirmar pelo António |
| 2026-09-21 | HubSpot Professional traz onboarding obrigatório (~3 000 $) não mencionado no Doc 04; só relevante à escala de agência (N4). | Orçamentar o onboarding em qualquer plano de entrada no N4 e rever alternativas D4 (ex.: Pipedrive + Brevo/ActiveCampaign) antes desse salto. | Protege o orçamento no N4; sem impacto no Ciclo 4 agora. | Recomendada — a confirmar pelo António |
| 2026-09-21 | CapCut reestruturou preços em 2026 (Standard ~9,99 $) e empurrou AI/templates premium para trás de paywall. | Manter CapCut grátis no Ciclo 4; o teto gratuito chega mais cedo, mas o gatilho de subida (>40 min/vídeo) mantém-se. | Nota de facto: 0 €. | Ativa |
| 2026-09-21 | Adobe dividiu o antigo "All Apps" em Standard (~54,99 $) e Pro (~69,99 $); relevante só no D1 N4. | Ao chegar ao N4 de vídeo, escolher Standard vs Pro conforme a necessidade de After Effects. | Nota de facto para o N4; sem impacto no Ciclo 4. | Ativa |
| [preencher] | [preencher] | [preencher] | [preencher] | [preencher] |
| [preencher] | [preencher] | [preencher] | [preencher] | [preencher] |

---

## Modelo de entrada detalhada *(para decisões grandes)*

> Usa quando uma decisão merece mais contexto do que uma linha da tabela.

### [Data] — [Título da decisão]
- **Contexto/problema:** [preencher]
- **Opções consideradas:** [preencher]
- **Decisão tomada:** [preencher]
- **Porquê (critério):** [preencher]
- **Riscos aceites:** [preencher]
- **Como saberei se foi boa (métrica/prazo de revisão):** [preencher]
- **Estado:** [Ativa / Revista / Revertida]
