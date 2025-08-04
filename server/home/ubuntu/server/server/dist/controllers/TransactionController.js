import { TransactionService } from '../services/transaction.service.js';
import { TransactionRepository } from '../repositories/transaction.repository.js';
export class TransactionController {
    async getAll(request, reply) {
        const repo = new TransactionRepository();
        const transactionService = new TransactionService(repo);
        const data = await transactionService.findAll();
        return reply.send(data);
    }
    async create(request, reply) {
        const { description, amount, type, date, categoryId, bankId } = request.body;
        const repo = new TransactionRepository();
        const transactionService = new TransactionService(repo);
        const newTransaction = await transactionService.create({ description, amount, type, date, categoryId, bankId });
        return reply.code(201).send(newTransaction);
    }
    async delete(request, reply) {
        const { id } = request.params;
        const repo = new TransactionRepository();
        const transactionService = new TransactionService(repo);
        await transactionService.delete(Number(id));
        return reply.send({ message: `Transação ${id} deletada com sucesso` });
    }
}
