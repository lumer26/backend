import { UserRepository } from '../repositories/UserRepository.js'
import { IUser } from '../common/IUser.js'

export class UserService {
  constructor(private userRepository = new UserRepository()) {}

  async getAllUsers(): Promise<IUser[]> {
    return this.userRepository.findAll()
  }

  async createUser(userData: IUser): Promise<IUser> {

    if (!userData.name || !userData.email) {
      throw new Error('Nome e email são obrigatórios')
    }

    if (!userData.email.includes('@')) {
      throw new Error('Email inválido')
    }

    return this.userRepository.create(userData)
  }

  async deleteUser(id: number): Promise<boolean> {
  const deleted = await this.userRepository.delete(id)
  return deleted
}
  
}

