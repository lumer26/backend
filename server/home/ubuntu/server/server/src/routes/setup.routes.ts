import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { setupController } from '../controllers/setup.controller.js';

type SetupRequestBody = {
  userId: number;
  bankName: string;
  categoryName: string;
  amount: number;
};

export async function setupRoutes(app: FastifyInstance) {
  app.post<{
    Body: SetupRequestBody
  }>('/setup', async (request, reply) => {
    
    return setupController(request, reply);
  });
}

