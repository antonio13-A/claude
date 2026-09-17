# Imagens

Onde vivem todas as imagens do site. Nada de externo: tudo o que a página mostra
está neste repositório.

## Estrutura

```
assets/img/logo.svg        símbolo da marca (vetorial, escala sem perder qualidade)
assets/img/registo/        capturas e fotografias das entradas do diário
```

Cria novas pastas por contexto (`assets/img/treino/`, `assets/img/tonycast/`) em vez
de despejar tudo na raiz.

## Convenção de nomes

```
AAAA-MM-DD-assunto-versao.jpg     ex.: 2026-09-17-landing-v01.jpg
```

Data primeiro: os ficheiros ficam ordenados cronologicamente sozinhos.
Só minúsculas, sem espaços e sem acentos — evita problemas entre Windows, macOS e servidor.

## Formatos

| Tipo | Formato | Porquê |
|---|---|---|
| Logótipos, ícones, símbolos | `.svg` | Vetorial: nítido em qualquer ecrã, poucos KB |
| Fotografias, capturas de ecrã | `.jpg` (qualidade 75–80) | Peso baixo com qualidade suficiente |
| Imagem com fundo transparente | `.png` | Só quando a transparência é mesmo necessária |

Mantém cada imagem **abaixo de 300 KB**. Uma página que demora a abrir perde o
visitante antes de ele ler a primeira linha.

## Como colocar uma imagem na página

```html
<figure class="media">
  <img src="assets/img/registo/2026-09-17-landing-v01.jpg"
       alt="Descrição do que se vê na imagem"
       loading="lazy" width="1280" height="800">
  <figcaption>Legenda curta</figcaption>
</figure>
```

Três detalhes que não são opcionais:

- **`alt`** — descreve o que se vê. É o que leem os leitores de ecrã e o que aparece
  se a imagem falhar.
- **`loading="lazy"`** — a imagem só descarrega quando o visitante chega perto dela.
- **`width` e `height`** — as dimensões reais do ficheiro. Sem elas, o texto salta
  na página enquanto a imagem carrega.
