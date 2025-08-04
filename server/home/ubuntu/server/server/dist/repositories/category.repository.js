import { prisma } from "../database/client.js";
export class CategoryRepository {
    prisma;
    constructor(prismaInstance) {
        this.prisma = prismaInstance || prisma;
    }
    async create(data) {
        return this.prisma.category.create({ data });
    }
    async findAll() {
        return this.prisma.category.findMany();
    }
    async delete(id) {
        return this.prisma.category.delete({ where: { id } });
    }
}
