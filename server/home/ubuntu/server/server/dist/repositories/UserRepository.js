// import { prisma } from "@/database/client.js";
// import { IUser } from "@/common/IUser.js";
// import { PrismaClient } from "@prisma/client";
export {};
// export class UserRepository {
//   private prisma: PrismaClient;
//   constructor(prismaInstance?: PrismaClient) {
//     this.prisma = prismaInstance || prisma;
//   }
//   async findAll(): Promise<IUser[]> {
//     return this.prisma.user.findMany();
//   }
//   async create(data: IUser): Promise<IUser> {
//     return this.prisma.user.create({ data });
//   }
//   async delete(id: number): Promise<boolean> {
//     const deletedUser = await this.prisma.user.delete({
//       where: { id },
//     }).catch(() => null);
//     return !!deletedUser;
//   }
// }
