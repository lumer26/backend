import { setupController } from '../controllers/setup.controller.js';
export async function setupRoutes(app) {
    app.post('/setup', async (request, reply) => {
        return setupController(request, reply);
    });
}
