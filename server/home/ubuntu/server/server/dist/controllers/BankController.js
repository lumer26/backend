import { BankRepository } from '../repositories/bank.repository.js';
import { BankService } from '../services/bank.service.js';
export class BankController {
    async getAll(request, reply) {
        const repo = new BankRepository();
        const bankService = new BankService(repo);
        const data = await bankService.findAll();
        return reply.send(data);
    }
    async create(request, reply) {
        const { ispb, name, code, fullName } = request.body;
        const repo = new BankRepository();
        const bankService = new BankService(repo);
        const newBank = await bankService.create({ ispb, name, code, fullName });
        return reply.code(201).send(newBank);
    }
    async delete(request, reply) {
        const { id } = request.params;
        const repo = new BankRepository();
        const bankService = new BankService(repo);
        await bankService.delete(Number(id));
        return reply.send({ message: `Banco ${id} deletado com sucesso` });
    }
}
