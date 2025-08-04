import { prisma } from "../database/client.js";
export class TransactionRepository {
    prisma;
    constructor(prismaInstance) {
        this.prisma = prismaInstance || prisma;
    }
    async create(data) {
        return this.prisma.transaction.create({ data });
    }
    async findAll() {
        return this.prisma.transaction.findMany();
    }
    async delete(id) {
        return this.prisma.transaction.delete({ where: { id } });
    }
}
