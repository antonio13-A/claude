# EMIGRANTE MODE — landing page

Landing page do projeto **Emigrante Mode**: construir capacidade antes de procurar
reconhecimento. HTML, CSS e JavaScript puro — sem frameworks, sem build, sem backend.

## Ficheiros

```
index.html              estrutura e conteúdo (hero + 6 secções + rodapé)
assets/css/styles.css   tokens de design, layout, componentes, responsivo, movimento
assets/js/main.js       progresso de scroll, reveal no viewport, scroll suave, ano
```

## Como abrir localmente

Abrir o ficheiro diretamente já funciona (não há pedidos de rede):

```bash
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

Para servir em HTTP (recomendado se quiseres testar em telemóvel na mesma rede):

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Como alterar

- **Cores, tipografia e espaçamentos**: bloco `:root` no topo de `assets/css/styles.css`.
- **Texto**: diretamente em `index.html` — cada secção está comentada (`01 PROBLEMA`, `02 SISTEMA`, ...).
- **Nova frente em "Em construção"**: duplicar um `<article class="build__item">`.
  Com 5 cartões a grelha faz 3 + 2; ao mudar o número, ajustar `.build__item:nth-child(4)`
  e `:nth-child(5)` em `styles.css`.
- **Links de acompanhamento**: no bloco `06 CTA FINAL`, substituir `href="#"` pelos
  URLs reais (newsletter, redes, canal).

## Deploy (Vercel)

O site é estático: não tem build, não tem dependências, não tem passo de compilação.

1. Em [vercel.com/new](https://vercel.com/new), importar o repositório `antonio13-A/claude`.
2. Configuração: **Framework Preset** `Other`, **Root Directory** `.`,
   **Build Command** vazio, **Output Directory** vazio.
3. Deploy.

A partir daí:

- cada push para `main` publica em produção;
- cada pull request gera um URL de preview próprio, para rever antes de juntar.

`vercel.json` define apenas cabeçalhos de segurança (`nosniff`, `Referrer-Policy`,
`X-Frame-Options`, `Permissions-Policy`). Não define cache longo de propósito: os
ficheiros não têm hash no nome, por isso um cache agressivo faria os visitantes
continuarem a ver a versão antiga do CSS depois de cada alteração.

## Acessibilidade e comportamento

- Funciona sem JavaScript: o conteúdo fica visível (o efeito de entrada só é aplicado com JS ativo).
- Respeita `prefers-reduced-motion`: sem animações nem scroll animado.
- Sem overflow horizontal em desktop e mobile; foco visível em todos os elementos interativos.
