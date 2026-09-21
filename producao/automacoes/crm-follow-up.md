# CRM & Follow-up — o motor de relação

> O detalhe do domínio **D) Atendimento & Follow-up** do [Blueprint de Automações](README.md). Aqui está o modelo de dados do CRM, as sequências de follow-up prontas a adaptar e as regras de higiene de dados. É o que garante que **nenhuma relação cai por entre as fendas** — convidado, lead ou cliente.
>
> Faz parte do [Manual de Produção](../README.md). Serve o [`sop-onboarding-convidado`](../sops/sop-onboarding-convidado.md) e o [`sop-parceria-cliente`](../sops/sop-parceria-cliente.md), e alimenta as secções 6, 7 e 15 da [ficha-mestra](../templates/template-projeto-producao.md).

---

## Princípio

> **A máquina prepara; tu dás a cara.** O CRM automatiza o *quando* e o *o quê* do follow-up. A mensagem que constrói relação continua tua. Automatiza o lembrete e o rascunho, nunca o afeto.

Toda a ferramenta aqui aparece como `[a tua ferramenta]` (ex.: um CRM · email/newsletter · um calendário). Preenche o teu stack em [`mapa-ferramentas.md`](mapa-ferramentas.md).

---

## a) Modelo de dados mínimo do CRM

Não precisas de um CRM complexo. Precisas de saber, a qualquer momento, **quem é cada contacto e qual é o próximo passo.**

### Tipos de contacto

| Tipo | Quem é | Origem típica |
|------|--------|---------------|
| **Convidado** | Participa/participou num episódio | Onboarding ([`sop-onboarding-convidado`](../sops/sop-onboarding-convidado.md)) |
| **Lead** | Audiência que deixou contacto | Funil ([`../canais/README.md`](../canais/README.md)) |
| **Cliente / Parceria** | Relação comercial | Oportunidade ([`sop-parceria-cliente`](../sops/sop-parceria-cliente.md)) |

### Campos mínimos por contacto

- **Nome** [preencher]
- **Email / contacto** [preencher]
- **Tipo** [Convidado / Lead / Cliente-parceria]
- **Origem** [preencher — de onde veio]
- **Tags / segmento** [preencher]
- **Estado no pipeline** [ver abaixo]
- **Próximo passo + data** [preencher]
- **Última interação** [preencher]
- **Ligação à ficha-mestra** [nº do projeto, se aplicável]

### Estados / pipeline

| Contexto | Estados (do início ao fim) |
|----------|----------------------------|
| **Convidado** | Convidado → Confirmado → Gravado → Publicado → Agradecido |
| **Lead** | Novo → Nutrido → Envolvido → Quente → Convertido / Inativo |
| **Cliente / Parceria** | Oportunidade → Qualificado → Proposta → Negociação → Fechado → Em acompanhamento |

> Um contacto tem sempre **um** estado e **um** próximo passo. Se não tem próximo passo, ou fechou ou está a arrefecer — decide qual.

---

## b) Sequências de follow-up prontas a adaptar

Cada sequência é um esqueleto: passos, timing e ferramenta como `[a tua ferramenta]`. Os passos marcados **[humano]** exigem a tua mão — a automação prepara, tu envias.

### Sequência 1 — Convidado (pré e pós-gravação)

Liga ao [`sop-onboarding-convidado`](../sops/sop-onboarding-convidado.md).

1. **Convite confirmado** — cria registo no CRM + envia boas-vindas e briefing. `[a tua ferramenta]` (ex.: um CRM + Gmail). Timing: no momento da confirmação.
2. **Uma semana antes** — envia detalhes logísticos (data, link, formato). `[a tua ferramenta]` (ex.: email + calendário). Timing: gravação −7 dias.
3. **Um dia antes** — lembrete + o que preparar. `[a tua ferramenta]`. Timing: gravação −1 dia.
4. **Pós-gravação (mesmo dia)** — **[humano]** agradecimento pessoal + o que se segue. `[a tua ferramenta]` prepara o rascunho. Timing: dia da gravação.
5. **Episódio publicado** — envia link + kit de partilha (imagens, legendas, clips). `[a tua ferramenta]` (ex.: um CRM + email). Timing: dia da publicação.
6. **Uma semana depois** — **[humano]** pergunta como correu a receção + abre porta a futuro. Timing: publicação +7 dias.

### Sequência 2 — Lead (nurture)

Liga aos [`canais/`](../canais/README.md) e ao [funil](../templates/template-funil-podcast.md).

1. **Entrada** — entrega do isco/lead magnet + boas-vindas. `[a tua ferramenta]` (ex.: email/newsletter). Timing: imediato.
2. **Dia 2** — a tua história/posicionamento (porquê seguir-te). `[a tua ferramenta]`. Timing: +2 dias.
3. **Dia 4–5** — valor puro: um episódio/recurso que resolve uma dor. `[a tua ferramenta]`. Timing: +4 a +5 dias.
4. **Dia 7** — convite suave a um passo seguinte (comunidade, resposta, oferta). `[a tua ferramenta]`. Timing: +7 dias.
5. **Contínuo** — entra na newsletter recorrente + scoring por comportamento. `[a tua ferramenta]` (ex.: um CRM). Timing: recorrente.
6. **Atinge "quente"** — **[humano]** contacto direto ou oferta dedicada. Timing: quando o score dispara.

### Sequência 3 — Cliente / Parceria (proposta → fecho → acompanhamento)

Liga ao [`sop-parceria-cliente`](../sops/sop-parceria-cliente.md).

1. **Oportunidade registada** — cria no pipeline + qualifica (fit com a audiência e a marca). `[a tua ferramenta]` (ex.: um CRM). Timing: imediato.
2. **Qualificado** — **[humano]** chamada de descoberta agendada automaticamente. `[a tua ferramenta]` (ex.: um calendário). Timing: +2 a +3 dias.
3. **Proposta enviada** — envia proposta + regista data de envio. `[a tua ferramenta]`. Timing: pós-chamada.
4. **Sem resposta (+X dias)** — lembrete de follow-up (**[humano]** valida antes de enviar). `[a tua ferramenta]`. Timing: envio +3 a +5 dias.
5. **Fecho** — cria tarefas de entrega + calendário de entregáveis. `[a tua ferramenta]` (ex.: um CRM + base de ops). Timing: no aceite.
6. **Pós-entrega** — **[humano]** acompanhamento + pedido de testemunho + porta a repetir. Timing: entrega +7 a +14 dias.

> Estas sequências são **defaults** — ajusta timing, número de passos e tom ao teu caso. O que não muda: cada passo tem um responsável (máquina ou tu) e uma data.

---

## c) Regras de higiene de dados

Um CRM sujo mente-te e as automações propagam o erro. Mantém-no limpo.

1. **Um contacto, um registo.** Deduplica por email. Se a mesma pessoa é convidado e lead, funde os registos e mantém o histórico.
2. **Sem próximo passo = revê.** Um contacto sem próximo passo nem estado de fecho está esquecido — não perdido de propósito.
3. **Consentimento e origem sempre registados.** Guarda de onde veio o contacto e se pediu para ser contactado. Respeita pedidos de saída de imediato.
4. **Dados sensíveis fora das automações abertas.** Nunca passes credenciais, dados pessoais de terceiros ou segredos por automações ou commits. Segue a [`../../seguranca/politica-acesso-backup.md`](../../seguranca/politica-acesso-backup.md).
5. **Revisão periódica.** Uma vez por ciclo, limpa inativos, corrige estados e confirma que as sequências ainda disparam. Liga esta revisão à [`07-analise`](../fases/07-analise.md).
6. **O CRM é fonte de verdade da relação.** Nada de listas paralelas soltas. Se um dado importa, vive no CRM ligado à [ficha-mestra](../templates/template-projeto-producao.md).

---

## Ligações

- Blueprint de Automações: [`README.md`](README.md)
- Mapa de ferramentas: [`mapa-ferramentas.md`](mapa-ferramentas.md)
- SOP Onboarding do convidado: [`../sops/sop-onboarding-convidado.md`](../sops/sop-onboarding-convidado.md)
- SOP Parceria com cliente: [`../sops/sop-parceria-cliente.md`](../sops/sop-parceria-cliente.md)
- Canais de captação & conversão: [`../canais/README.md`](../canais/README.md)
- Funil do podcast: [`../templates/template-funil-podcast.md`](../templates/template-funil-podcast.md)
- Segurança (dados e segredos): [`../../seguranca/politica-acesso-backup.md`](../../seguranca/politica-acesso-backup.md)
