import { CategoriesController } from "../controllers/categories-controller.js";
import { fastify } from "../fastify.js";
import { CategoryRepositoryInMemory } from "../repositories/category-repository-in-memory.js";

const repositoriesCategory = new CategoryRepositoryInMemory()
const categoriesController = new CategoriesController(repositoriesCategory)

fastify.route({
  method: 'POST',
  url: '/categories',
  handler: (request, reply) => categoriesController.create(request, reply)
})
