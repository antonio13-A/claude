# Política de Acesso e Backup

> A camada que protege tudo o resto. Este documento define quem acede, como se fazem cópias de segurança, como se empacotam os dados e como se protege informação sensível. Um negócio de conteúdo vale pelos seus ativos — perdê-los ou expô-los não é opção.

---

## 1. Política de acesso

> **Princípio: só o dono.** Este é um repositório privado, de acesso individual.

- **Acesso:** apenas o dono (proprietário do negócio). O repositório é privado no GitHub.
- **Colaboradores:** nenhum, por defeito. Se algum dia for preciso partilhar, dá o **mínimo acesso necessário** (por pasta/tarefa) e retira-o quando terminar.
- **Autenticação:** usa uma conta com autenticação de dois fatores (2FA) ativa.
- **Dispositivos:** acede apenas a partir de dispositivos de confiança e protegidos por palavra-passe/biometria.

---

## 2. Regra de backups — 3-2-1

> **3-2-1:** mantém **3** cópias dos dados, em **2** tipos de suporte diferentes, sendo **1** fora do local (off-site).

- **Cópia 1 (trabalho):** o repositório local no teu computador.
- **Cópia 2 (remota):** o repositório no GitHub (off-site, na cloud).
- **Cópia 3 (independente):** um arquivo periódico num suporte distinto (disco externo e/ou outra cloud).

**Frequência:**

| Tipo de dado | Frequência de backup |
|--------------|----------------------|
| Repositório (texto/estrutura) | A cada alteração (commit + push) |
| Arquivo comprimido do estado | Mensal (release) |
| Ficheiros multimédia pesados | A cada produção + cópia mensal |

**Verificação:** de tempos a tempos, confirma que consegues **restaurar** a partir do backup. Um backup que nunca foi testado não é um backup fiável.

---

## 3. Empacotamento de dados (releases mensais)

> No fim de cada mês, congela e empacota o estado do sistema. Isto dá-te pontos de restauro limpos e um histórico de "fotografias" do negócio.

Passos sugeridos:

1. Garante que tudo está commitado (`git status` limpo).
2. Cria uma etiqueta (tag) do mês, por exemplo:
   ```
   git tag -a v2026.09 -m "Estado de setembro de 2026"
   git push origin v2026.09
   ```
3. (Opcional) Gera um arquivo comprimido do estado atual, por exemplo:
   ```
   git archive --format=zip -o releases/2026-09.zip HEAD
   ```
   > Guarda o `.zip` fora do repositório (na cópia 3 do 3-2-1). Não incluas ficheiros pesados nem sensíveis.
4. Regista o empacotamento no `memoria/inventario-mestre.md`.

---

## 4. Proteção de dados sensíveis

> **Regra absoluta: nunca fazer commit de credenciais, tokens, palavras-passe ou dados pessoais de terceiros.**

- **Nada de segredos no repositório.** Tokens de API, palavras-passe, chaves privadas e ficheiros `.env` **nunca** entram no Git.
- **Onde guardar segredos:** num gestor de palavras-passe dedicado. No repositório, no máximo, regista *que* um segredo existe e *onde* está guardado — nunca o valor.
- **Dados de convidados/terceiros:** trata contactos e dados pessoais com cuidado; não os exponhas publicamente e cumpre a proteção de dados aplicável.
- **`.gitignore`:** mantém um `.gitignore` que exclua ficheiros sensíveis e pesados (ex: `.env`, `*.key`, ficheiros de multimédia grandes).
- **Se um segredo escapar:** revoga-o imediatamente na origem (gera um novo token/palavra-passe). Remover do histórico do Git não basta — considera-o comprometido.

**Checklist antes de cada commit:**
- [ ] Não há tokens, palavras-passe ou chaves nos ficheiros
- [ ] Não há dados pessoais sensíveis de terceiros
- [ ] Ficheiros pesados/temporários estão no `.gitignore`

---

## 5. Recuperação (o que fazer se algo correr mal)

1. Identifica o que se perdeu ou expôs.
2. Restaura a partir da cópia mais recente e íntegra (local → GitHub → arquivo mensal).
3. Se houve exposição de segredos, **revoga e substitui** já.
4. Regista o incidente e a decisão em `memoria/decision-log.md`.
