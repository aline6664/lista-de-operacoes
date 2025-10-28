/* /src/data/mockChamados.js */

export const chamados = [
  {
    "id": 30696207,
    "codigo": 54903,
    "status": "A fazer",
    "prioridade": "Baixo",
    "assunto": "LINK ROS ABSOLUTA",
    "descricao": "O monitoramento de Ping - LINK ROS ABSOLUTA (177.91.127.114) -  se encontrou indisponível 1 vezes em um período de 5 Minutos - Razão:  Sem resposta",
    "contato": "Automação Milvus",
    "email_conferencia": "automacao@milvus.com.br",
    "tecnico": null, // Técnico pode ser nulo
    "total_avaliacao": null, // Avaliação pode ser nula
    "dispositivo_vinculado": null, // Dispositivo pode ser nulo
    "cliente": "ESSENCIAL CONFECCOES"
  },
  {
    "id": 30694023,
    "codigo": 54902,
    "status": "A fazer",
    "prioridade": "Crítico",
    "assunto": "LINK VIVO UMOE SANDOVALINA",
    "descricao": "O monitoramento de Ping - LINK VIVO UMOE SANDOVALINA (200.206.34.250) -  se encontrou indisponível 1 vezes em um período de 5 Minutos - Razão:  Sem resposta",
    "contato": "Automação Milvus",
    "email_conferencia": "automacao@milvus.com.br",
    "tecnico": null,
    "total_avaliacao": null,
    "dispositivo_vinculado": null,
    "cliente": "UMOE"
  },
  {
    "id": 30691440,
    "codigo": 54901,
    "status": "Finalizado",
    "prioridade": "Baixo",
    "assunto": "IncompleteMachineInfo",
    "descricao": "Recurso: PM264",
    "contato": "Contato Automático",
    "email_conferencia": "automacao@milvus.com.br",
    "tecnico": "RODOLFO",
    "total_avaliacao": null, // Mesmo finalizado, pode não ter avaliação
    "dispositivo_vinculado": {
      "hostname": "PM264",
      "apelido": null
    },
    "cliente": "MUNICÍPIO DE REGENTE FEIJÓ"
  },
  {
    "id": 30690105,
    "codigo": 54900,
    "status": "Finalizado",
    "prioridade": "Baixo",
    "assunto": "Criação de usuário genérico",
    "descricao": "Criar um usuário \"TREINAMENTO\"  na maquina CI022, para que possamos utilizar para todos os colaboradores que estiverem aqui no setor em fase de treinamento.",
    "contato": "Luana Rafaela",
    "email_conferencia": "tecnicoadministrativo@ciop.sp.gov.br",
    "tecnico": "THIAGO",
    "total_avaliacao": 5, // Avaliação com 5 estrelas
    "dispositivo_vinculado": {
      "hostname": "CI038", // Note que o hostname é diferente do ticket
      "apelido": null
    },
    "cliente": "CIOP"
  },
  {
    "id": 30689358,
    "codigo": 54899,
    "status": "A fazer",
    "prioridade": "Planejado",
    "assunto": "Nobreak",
    "descricao": "Usuária solicita que o técnico vai até o local instalar o nobreak que se encontrava em manutenção",
    "contato": "Julia Ramos",
    "email_conferencia": "juliaapolido56@gmail.com",
    "tecnico": "RODOLFO",
    "total_avaliacao": null,
    "dispositivo_vinculado": {
      "hostname": "HRA001",
      "apelido": null
    },
    "cliente": "HELIO RAMOS HOTEL"
  }
];