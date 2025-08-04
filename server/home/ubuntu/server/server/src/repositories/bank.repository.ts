import { prisma } from "../database/client.js";
import { CreateBankDTO } from "../entities/bank.entity.js";
import { PrismaClient } from "@prisma/client";

export class BankRepository {
  private prisma: PrismaClient;

  constructor(prismaInstance?: PrismaClient) {
    this.prisma = prismaInstance || prisma;
  }

  async create(data: CreateBankDTO) {
    return this.prisma.bank.create({ data });
  }

  async findAll() {
    return this.prisma.bank.findMany();
  }

  async delete(id: number) {
    return this.prisma.bank.delete({ where: { id } });
  }
}

