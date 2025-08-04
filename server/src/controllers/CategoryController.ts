import { CategoryRepository } from '../repositories/category.repository.js';
import { CategoryService } from '../services/category.service.js';
import { FastifyRequest, FastifyReply } from 'fastify';

export class CategoryController {
  async getAll(request: FastifyRequest, reply: FastifyReply) {
    const repo = new CategoryRepository();
    const categoryService = new CategoryService(repo);
    const data = await categoryService.findAll();
    return reply.send(data);
  }

  async create(request: FastifyRequest, reply: FastifyReply) {
    const { name, icon } = request.body as {
      name: string;
      icon?: string;
    };

    const repo = new CategoryRepository();
    const categoryService = new CategoryService(repo);
    const newCategory = await categoryService.create({ name, icon });

    return reply.code(201).send(newCategory);
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };
    const repo = new CategoryRepository();
    const categoryService = new CategoryService(repo);
    await categoryService.delete(Number(id));

    return reply.send({ message: `Categoria ${id} deletada com sucesso` });
  }
}


