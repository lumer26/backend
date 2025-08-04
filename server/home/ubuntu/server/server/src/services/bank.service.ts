import { BankRepository } from "../repositories/bank.repository.js";

export class BankService {
  constructor(private repo: BankRepository) {}

  async create(data: { ispb: string; name: string; code: string; fullName: string }) {
    return this.repo.create(data);
  }
  async findAll() {
    return this.repo.findAll();
  }
  async delete(id: number) {
    return this.repo.delete(id);
  }

}

