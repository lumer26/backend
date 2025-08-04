import { CategoryController } from '../controllers/CategoryController.js';
export async function categoryRoutes(server) {
    const controller = new CategoryController();
    server.get('/categories', controller.getAll.bind(controller));
    server.post('/categories', controller.create.bind(controller));
    server.delete('/categories/:id', controller.delete.bind(controller));
}
