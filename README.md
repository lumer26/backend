# Backend Fastify - Corrigido

Este é o backend Fastify corrigido e funcionando.

## Problemas que foram corrigidos:

1. **Dependências não instaladas**: Instalei todas as dependências necessárias
2. **Problemas de permissão**: Corrigi as permissões dos binários
3. **Configuração do Prisma**: Configurei o Prisma com SQLite para facilitar o desenvolvimento
4. **Configuração de módulos ES6**: Atualizei para usar `tsx` em vez de `ts-node-dev`
5. **CORS**: Adicionei suporte a CORS para permitir requisições do frontend
6. **Tratamento de erros**: Melhorei o tratamento de erros nos controllers
7. **Validações**: Adicionei validações básicas no service

## Como executar:

```bash
# Instalar dependências
npm install

# Gerar o cliente do Prisma
npm run db:generate

# Sincronizar o banco de dados
npm run db:push

# Executar em modo de desenvolvimento
npm run dev

# Ou executar em produção
npm run build
npm start
```

## Endpoints disponíveis:

- `GET /` - Rota de teste
- `GET /users` - Listar todos os usuários
- `POST /users` - Criar um novo usuário

### Exemplo de uso:

```bash
# Listar usuários
curl -X GET http://localhost:3001/users

# Criar usuário
curl -X POST http://localhost:3001/users \
  -H "Content-Type: application/json" \
  -d '{"name": "João Silva", "email": "joao@email.com"}'
```

## Estrutura do projeto:

```
src/
├── controllers/     # Controllers da aplicação
├── interfaces/      # Interfaces TypeScript
├── prisma/         # Cliente do Prisma
├── repositories/   # Repositórios de dados
├── routes/         # Definição das rotas
├── services/       # Lógica de negócio
└── server.ts       # Arquivo principal do servidor
```

O servidor agora está funcionando corretamente na porta 3001 com CORS habilitado e banco de dados SQLite configurado.

# backend
