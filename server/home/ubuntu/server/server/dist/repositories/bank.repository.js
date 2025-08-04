import { prisma } from "../database/client.js";
export class BankRepository {
    prisma;
    constructor(prismaInstance) {
        this.prisma = prismaInstance || prisma;
    }
    async create(data) {
        return this.prisma.bank.create({ data });
    }
    async findAll() {
        return this.prisma.bank.findMany();
    }
    async delete(id) {
        return this.prisma.bank.delete({ where: { id } });
    }
}
