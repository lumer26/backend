import { BankRepository } from '../repositories/bank.repository.js';
import { BankService } from '../services/bank.service.js';
import { FastifyRequest, FastifyReply } from 'fastify';

export class BankController {
  
  async getAll(request: FastifyRequest, reply: FastifyReply) {
    const repo = new BankRepository();
    const bankService = new BankService(repo);
    const data = await bankService.findAll();
    return reply.send(data);
  }

  async create(request: FastifyRequest, reply: FastifyReply) {
    const { ispb, name, code, fullName } = request.body as {
      ispb: string;
      name: string;
      code: string;
      fullName: string;
    };

    const repo = new BankRepository();
    const bankService = new BankService(repo);
    const newBank = await bankService.create({ ispb, name, code, fullName });

    return reply.code(201).send(newBank);
  }
  
  async delete(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };
    const repo = new BankRepository();
    const bankService = new BankService(repo);
    await bankService.delete(Number(id));
    
    return reply.send({ message: `Banco ${id} deletado com sucesso` });
  }
}

