import { prisma } from "../database/prisma.js";
import { Category } from "../entities/transaction.js";
import { CategoryInterfaceRepository, CreateCategoryDTO } from "./category-interface-repository.js";

export class CategoryRepositoryInMemory implements CategoryInterfaceRepository {
  categories: Category[] = [];

  async findById(id: string): Promise<Category | null> {
    const category = this.categories.find(category => category.id === id);

    // if (category === undefined) {
    //   return null;
    // } else {
    //   return category;
    // }

    return category  || null;
  }
  async findByName(name: string): Promise<Category | null> {
    const category = this.categories.find(category => category.name === name);
    return category || null;
  }
  findAll(): Promise<Category[]> {
    throw new Error("Method not implemented.");
  }
  async create(category: CreateCategoryDTO): Promise<Category> {
    const newCategory = prisma.category.create({
      data: {
        name: category.name,
        icon: category.icon ?? null
      }
    })
    // this.categories.push(newCategory);
    return newCategory;
  }
  update(category: Category): Promise<Category> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
