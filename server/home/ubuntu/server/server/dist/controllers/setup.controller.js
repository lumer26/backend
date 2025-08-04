import { prisma } from '../database/client.js';
import { BankService } from '../services/bank.service.js';
import { CategoryService } from '../services/category.service.js';
import { TransactionService } from '../services/transaction.service.js';
import { BankRepository } from '../repositories/bank.repository.js';
import { CategoryRepository } from '../repositories/category.repository.js';
import { TransactionRepository } from '../repositories/transaction.repository.js';
export async function setupController(request, reply) {
    const { userId, bankName, categoryName, amount } = request.body;
    try {
        const result = await prisma.$transaction(async (tx) => {
            const bankRepo = new BankRepository(tx); // Passa o tx para o repositório
            const bankService = new BankService(bankRepo);
            const categoryRepo = new CategoryRepository(tx); // Passa o tx para o repositório
            const categoryService = new CategoryService(categoryRepo);
            const transactionRepo = new TransactionRepository(tx); // Passa o tx para o repositório
            const transactionService = new TransactionService(transactionRepo);
            const bank = await bankService.create({ ispb: '000000', name: bankName, code: '000', fullName: bankName }); // Ajustar conforme o DTO de Bank
            const category = await categoryService.create({ name: categoryName }); // Ajustar conforme o DTO de Category
            const transaction = await transactionService.create({
                amount,
                date: new Date(),
                type: 'income',
                bankId: bank.id,
                categoryId: category.id,
            });
            return { bank, category, transaction };
        });
        return reply.code(201).send(result);
    }
    catch (error) {
        console.error("Erro na transação:", error);
        return reply.code(500).send({ error: "Erro ao configurar dados iniciais" });
    }
}
