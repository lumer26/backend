import { CategoryRepository } from "../repositories/category.repository.js";

export class CategoryService {
  constructor(private repo: CategoryRepository) {}

  async create(data: { name: string; icon?: string | null }) {
    return this.repo.create(data);
  }
  async findAll() {
    return this.repo.findAll();
  }

  async delete(id: number) {
    return this.repo.delete(id);
  }
}


