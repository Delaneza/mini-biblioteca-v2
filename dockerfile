FROM node:20-slim

# Criar diretório do app
WORKDIR /app

# Copiar package.json e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar os arquivos restantes
COPY . .

# Expor porta do app
EXPOSE 3000

# Comando default (ou deixe no docker-compose)
CMD [ "node", "src/app.js" ]