import { CategoryRepository } from '../repositories/category.repository.js';
import { CategoryService } from '../services/category.service.js';
export class CategoryController {
    async getAll(request, reply) {
        const repo = new CategoryRepository();
        const categoryService = new CategoryService(repo);
        const data = await categoryService.findAll();
        return reply.send(data);
    }
    async create(request, reply) {
        const { name, icon } = request.body;
        const repo = new CategoryRepository();
        const categoryService = new CategoryService(repo);
        const newCategory = await categoryService.create({ name, icon });
        return reply.code(201).send(newCategory);
    }
    async delete(request, reply) {
        const { id } = request.params;
        const repo = new CategoryRepository();
        const categoryService = new CategoryService(repo);
        await categoryService.delete(Number(id));
        return reply.send({ message: `Categoria ${id} deletada com sucesso` });
    }
}
