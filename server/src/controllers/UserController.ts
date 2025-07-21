import { FastifyReply, FastifyRequest } from 'fastify'
import { UserService } from '../services/UserService.js'
import { IUser } from '../common/IUser.js'

const userService = new UserService()

export class UserController {
  async getAll(req: FastifyRequest, reply: FastifyReply) {
    try {
      const users = await userService.getAllUsers()
      reply.send(users)
    } catch (error) {
      reply.status(500).send({ error: 'Erro ao buscar usuários' })
    }
  }

async create(req: FastifyRequest<{ Body: IUser }>, reply: FastifyReply) {
  try {
    const user = await userService.createUser(req.body)
    reply.status(201).send(user)
  } catch (error: any) {
    console.error('Erro ao criar usuário:', error)
    reply.status(500).send({ error: error.message || 'Erro ao criar usuário' })
  }
}
async delete(req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
  try {
    const id = Number(req.params.id)
    const deleted = await userService.deleteUser(id)
    if (!deleted) {
      reply.status(404).send({ error: 'Usuário não encontrado' })
      return
    }
    reply.status(204).send()
  } catch (error: any) {
    console.error(error)
    reply.status(500).send({ error: error.message || 'Erro ao deletar usuário' })
  }
}

}


