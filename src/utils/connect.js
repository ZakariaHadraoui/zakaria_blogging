import { PrismaClient } from '@prisma/client';

let prismaInstance;

const getPrismaClient = () => {
  if (!prismaInstance) {
    prismaInstance = new PrismaClient();
  }
  return prismaInstance;
};

export default getPrismaClient();