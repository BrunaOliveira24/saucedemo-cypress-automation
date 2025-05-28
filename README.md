# Automação Cypress - SauceDemo

Este projeto contém testes automatizados para o site de e-commerce SauceDemo utilizando Cypress.

## 🚀 Configuração do Projeto

### Pré-requisitos
- Node.js (v12 ou superior)
- NPM (Gerenciador de Pacotes do Node)

### Instalação
1. Clone este repositório
```bash
git clone [url-do-seu-repositório]
```

2. Instale as dependências
```bash
npm install
```

## 🎯 Executando os Testes

### Linha de Comando
```bash
npm run cypress:open  # Abre o Cypress Test Runner
npm run cypress:run   # Executa os testes em modo headless
```

## 📁 Estrutura do Projeto
```
cypress/
├── e2e/            # Arquivos de teste
├── fixtures/       # Dados de teste
├── pages/          # Page Objects
└── support/        # Arquivos e comandos de suporte
```

## 🧪 Cenários de Teste
- Funcionalidade de login
- Listagem de produtos
- Operações do carrinho de compras
- Processo de checkout

## 📝 Relatórios
Os relatórios de teste são gerados automaticamente após cada execução.

## 👥 Contribuindo
Sinta-se à vontade para enviar issues e sugestões de melhorias.

## 📄 Licença
Este projeto está licenciado sob a Licença MIT.
