# Dados e indicadores
[Início](../README.md)

Os CSV são **modelos vazios**, sem resultados reais. Preencher na cópia de trabalho; publicar apenas dados revistos.
Uma linha por entidade. UTF-8; vírgula como separador; campos com vírgulas entre aspas. Datas ISO; instantes com fuso. Célula vazia = ainda não preenchida, não zero.

## Tabelas
- [registos.csv](registos.csv): índice de SRC, BEN, LIVE, EXT, AST, PUB, MET, DEC e EVD.
- [relacoes.csv](relacoes.csv): uma relação por linha; permite várias origens por ativo.
- [publicacoes.csv](publicacoes.csv): uma ocorrência de distribuição por linha.
- [medicoes.csv](medicoes.csv): uma métrica, publicação e janela por linha.
- [decisoes.csv](decisoes.csv): hipótese, evidência, limitação e aplicação seguinte.
- [tempos.csv](tempos.csv): tempo real de cada etapa para estimar capacidade.

## Dicionário
id: identificador único e estável; não reutilizar após exclusão.
tipo: prefixo do registo.
origem_id/destino_id: devem existir no índice; relação descreve “deriva_de”, “publica”, “mede” ou “orienta”.
estado: fase real; nunca assumir publicado quando apenas agendado.
URL pública: ligação conferida. caminho_interno: apenas na cópia privada.
observado_em: momento da recolha, distinto do período medido.
disponibilidade: disponivel, indisponivel ou pendente.
valor: numérico quando disponível; vazio nos outros casos.
numerador/denominador: valores usados no cálculo, com definição.
fonte: exportação, captura ou origem verificável.
minutos_reais: duração observada; não usar previsão como realizado.

## Indicadores propostos
| Indicador | Cálculo | Limite |
| --- | --- | --- |
| Sessões documentadas | Sessões com dossier mínimo / sessões realizadas | Definir dossier e período |
| Ativos publicados | AST distintos com PUB confirmado | Reposts não são novos AST |
| Aplicação da aprendizagem | DEC aplicadas com prova / DEC selecionadas | Definir o que conta como aplicação |
| Tempo por ciclo | Soma das etapas concluídas | Não comparar ciclos de escopo diferente |
| Progresso das metas | Unidades verificadas / meta definida | Saldo inicial ainda por apurar |
| Taxa de ação | Ações / denominador declarado | Não misturar alcance com impressões |
| Muletas por minuto | Ocorrências verificadas / minutos analisados | Declarar amostra e critérios |

Não somar alcance de redes como pessoas únicas. Não confundir competência demonstrada com receita.
Se não existir denominador válido, não calcular taxa. Comparar janelas e formatos semelhantes e declarar diferenças.

## Revisão antes da análise
IDs únicos; relações existentes; datas válidas; fontes recuperáveis; valores indisponíveis não preenchidos com zero; nenhum resultado didático misturado com real.
