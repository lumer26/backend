import { prisma } from "../database/client.js";
import { CreateTransactionDTO } from "../entities/transaction.entity.js";
import { PrismaClient } from "@prisma/client";

export class TransactionRepository {
  private prisma: PrismaClient;

  constructor(prismaInstance?: PrismaClient) {
    this.prisma = prismaInstance || prisma;
  }

  async create(data: CreateTransactionDTO) {
    return this.prisma.transaction.create({ data });
  }

  async findAll() {
    return this.prisma.transaction.findMany();
  }

  async delete(id: number) {
    return this.prisma.transaction.delete({ where: { id } });
  }
} 

