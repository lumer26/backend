import { prisma } from '../database/client.js'
import { IUser } from '../common/IUser.js'

export class UserRepository {
  async findAll(): Promise<IUser[]> {
    return prisma.user.findMany()
  }

  async create(data: IUser): Promise<IUser> {
    return prisma.user.create({ data })
  }

  async delete(id: number): Promise<boolean> {
    const deletedUser = await prisma.user.delete({
      where: { id }
    }).catch(() => null)

    return !!deletedUser
  }
}
