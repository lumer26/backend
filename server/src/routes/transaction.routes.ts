import { FastifyInstance } from 'fastify';
import { TransactionController } from '../controllers/TransactionController.js';

export async function transactionRoutes(server: FastifyInstance) {
  const controller = new TransactionController();

  server.get('/transactions', controller.getAll.bind(controller));
  server.post('/transactions', controller.create.bind(controller));
  server.delete('/transactions/:id', controller.delete.bind(controller));
}

