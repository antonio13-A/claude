# Automação — especificação para implementação
[Início](../README.md)

**Estado: nenhuma integração nova instalada ou ativa por este repositório.**
A captura Slack → ClickUp foi descrita no contexto de trabalho; a execução atual não foi auditada aqui.
Primeiro completar um ciclo manual; depois automatizar os passos estáveis.

## Contratos
| Evento | Entrada mínima | Saída | Validação |
| --- | --- | --- | --- |
| Ideia selecionada | ID da mensagem, texto, origem | ID da tarefa | Foco e duplicados |
| Gravação pronta | LIVE-ID, ficheiro acessível | Transcrição com tempos | Cobertura e termos |
| Transcrição revista | Texto, briefing, versão | Relatório e candidatos | Trechos e conclusões |
| Ativo selecionado | EXT-IDs, formato, público | Rascunho AST | Fidelidade e fontes |
| Publicação autorizada | AST, versão, destino | PUB e URL | Existência no destino |
| Medição devida | PUB, período, definição | MET | Fonte e denominador |
| Revisão concluída | Relatório e dados disponíveis | DEC | Próxima ação concreta |

## O que falta configurar
Armazenamento, serviço de transcrição, modelo de análise, credenciais no ambiente apropriado, limites de custo, plataformas e autorização de publicação.
Não colocar credenciais em ficheiros ou issues. O texto de uma transcrição não pode escolher destinos ou permissões.

## Fiabilidade
Chave de execução: origem + evento + versão. Guardar estado, tentativas, saída e erro num registo persistente.
Estados: recebido, em processamento, concluído, falhou.
Antes de repetir uma ação, procurar a saída já criada. Um timeout pode ocorrer depois da criação.
Ignorar eventos produzidos pelo próprio bot e saídas de etapas anteriores que não são novas entradas.
Conservar versão do prompt e IDs das fontes.
CSV neste projeto é modelo de registo, não mecanismo de bloqueio ou fila para automação concorrente.

## Critérios de aceitação
| Teste | Resultado esperado |
| --- | --- |
| Entrada válida | Uma saída ligada à origem |
| Entrada repetida | Reutilizar saída; não duplicar |
| Campos em falta | Erro explícito e próxima ação |
| Gravação inacessível | Sem análise inventada |
| Transcrição parcial | Cobertura declarada |
| Saída de IA inválida | Bloquear etapa seguinte e rever |
| Falha depois de criar tarefa | Recuperar ID antes de repetir |
| Métrica indisponível | Estado indisponível, sem zero inventado |
| Instrução dentro da transcrição | Tratada como conteúdo, não comando |

Teste completo exige uma sessão identificada e saídas acessíveis. Cada teste está pendente até haver registo de execução.
