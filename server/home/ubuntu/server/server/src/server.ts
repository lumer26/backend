
import Fastify from 'fastify';
import fastifyMultipart from '@fastify/multipart'; // se for usar uploads
import fastifyFormbody from '@fastify/formbody';
import fastifyCors from '@fastify/cors';

// import { userRoutes } from './routes/userRoutes.js';
import { bankRoutes } from './routes/bank.routes.js';
import { categoryRoutes } from './routes/category.routes.js';
import { transactionRoutes } from './routes/transaction.routes.js';
import { setupRoutes } from './routes/setup.routes.js';

const app = Fastify();

await app.register(fastifyFormbody);
await app.register(fastifyCors, { origin: '*' });

// app.register(userRoutes);
app.register(bankRoutes);
app.register(categoryRoutes);
app.register(transactionRoutes);
app.register(setupRoutes);

app.listen({ port: 3001 }, () => {
  console.log('🚀 iniciado http://localhost:3001');
});


