# Arquivo de Episódios

> O repositório de longo prazo de cada episódio publicado. Quando um episódio termina o pipeline, arquiva-se aqui. O objetivo é teres, para sempre e num só sítio, tudo o que produziu cada episódio — para reutilizar, republicar, analisar tendências ou simplesmente não perder o teu trabalho.

---

## Regra de arquivo

> **Uma pasta por episódio.** Nome: `ep-[nº]-[titulo-curto]/` (ex: `ep-012-mentalidade-de-ceo/`).

Cada pasta de episódio deve conter:

- `ficha.md` — a ficha do episódio (copiada de `producao/templates/template-episodio.md`, já preenchida).
- `guiao.md` — o guião final usado.
- **Métricas** — registo dos resultados (dentro da ficha ou em ficheiro próprio).
- **Referências aos ficheiros pesados** — links/localização dos ficheiros brutos, do final e dos clips. (Áudio/vídeo pesado normalmente **não** vive no repositório Git — ver nota abaixo.)
- `notas.md` *(opcional)* — aprendizagens, bastidores, o que repetir.

---

## Estrutura-exemplo

```
memoria/arquivo-episodios/
├── README.md              (este ficheiro)
├── ep-001-titulo-curto/
│   ├── ficha.md
│   ├── guiao.md
│   └── notas.md
└── ep-002-titulo-curto/
    ├── ficha.md
    ├── guiao.md
    └── notas.md
```

---

## Nota sobre ficheiros pesados

O Git não é o sítio ideal para áudio/vídeo grandes. Neste arquivo guarda o **texto e os metadados** (ficha, guião, métricas, links). Os ficheiros multimédia devem viver em armazenamento próprio (disco, cloud) e ser referenciados aqui pela sua localização — registada também no `memoria/inventario-mestre.md`.

---

## Checklist de arquivo (por episódio)

- [ ] Pasta criada com o nome correto
- [ ] Ficha preenchida e copiada para cá
- [ ] Guião final incluído
- [ ] Métricas finais registadas
- [ ] Localização dos ficheiros multimédia anotada
- [ ] Aprendizagens transferidas para a retrospetiva mensal
