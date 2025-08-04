import { prisma } from "../database/client.js";
import { CreateCategoryDTO } from "../entities/category.entity.js";
import { PrismaClient } from "@prisma/client";

export class CategoryRepository {
  private prisma: PrismaClient;

  constructor(prismaInstance?: PrismaClient) {
    this.prisma = prismaInstance || prisma;
  }

  async create(data: CreateCategoryDTO) {
    return this.prisma.category.create({ data });
  }

  async findAll() {
    return this.prisma.category.findMany();
  }

  async delete(id: number) {
    return this.prisma.category.delete({ where: { id } });
  }
}

