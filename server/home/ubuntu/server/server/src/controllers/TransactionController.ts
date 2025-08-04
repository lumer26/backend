import { FastifyRequest, FastifyReply } from 'fastify';
import { TransactionService } from '../services/transaction.service.js';
import { TransactionRepository } from '../repositories/transaction.repository.js';

export class TransactionController {
  async getAll(request: FastifyRequest, reply: FastifyReply) {
    const repo = new TransactionRepository();
    const transactionService = new TransactionService(repo);
    const data = await transactionService.findAll();
    return reply.send(data);
  }

  async create(request: FastifyRequest, reply: FastifyReply) {
    const { description, amount, type, date, categoryId, bankId } = request.body as {
      description?: string;
      amount: number;
      type: 'income' | 'expense';
      date: Date;
      categoryId?: number;
      bankId?: number;
    };

    const repo = new TransactionRepository();
    const transactionService = new TransactionService(repo);
    const newTransaction = await transactionService.create({ description, amount, type, date, categoryId, bankId });

    return reply.code(201).send(newTransaction);
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };
    const repo = new TransactionRepository();
    const transactionService = new TransactionService(repo);
    await transactionService.delete(Number(id));

    return reply.send({ message: `Transação ${id} deletada com sucesso` });
  }
}

