# API de consulta de usuários

# Funcionais

1. A aplicação deve possuir duas funcionalidades, “Baixar Dados” e “Salvar Dados”
2. A ação “Baixar Dados” deve consome a api https://jsonplaceholder.typicode.com/users e apresenta o resultado
3. A ação “Salvar Dados” deve armazenar os dados no DB

# Não funcionais

1. Baixar Dados - Apresenta todo o conteúdo da API mencionada, sem filtro ou critério, apenas identado como json
2. Salvar Dados - Salva somente os usuários hospedados em suítes, não em apartamentos
3. Salvar Dados - Os dados são armazenados em ordem de “name” alfabética
5. Dados salvos de forma normalizada, separando:
a. Dados pessoais
b. Dados de endereço
c. Dados de contato

# Stacks utilizadas

- Node.js
- Javascript
- MySQL

# Executando a aplicação no browser

1. Execute 'npm install' para instalar as dependencias

2. Execute o comando 'node index.js' no terminal

3. Basta abrir o browser em 'http://localhost:3001' 

4. As solicitações de 'Baixar' e 'Salvar' irão aparecer no terminal 
