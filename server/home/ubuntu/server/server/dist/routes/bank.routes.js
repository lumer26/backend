import { BankController } from '../controllers/BankController.js';
export async function bankRoutes(server) {
    const controller = new BankController();
    server.get('/banks', controller.getAll.bind(controller));
    server.post('/banks', controller.create.bind(controller));
    server.delete('/banks/:id', controller.delete.bind(controller));
}
