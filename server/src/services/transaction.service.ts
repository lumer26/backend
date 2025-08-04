import { TransactionRepository } from "../repositories/transaction.repository.js";

export class TransactionService {
  constructor(private repo: TransactionRepository) {}

   async create(data: { description?: string; amount: number; type: string; date: Date; categoryId?: number; bankId?: number }) {
    return this.repo.create(data);
  }

  async findAll() {
    return this.repo.findAll();
  }

  async delete(id: number) {
    return this.repo.delete(id);
  }
}

