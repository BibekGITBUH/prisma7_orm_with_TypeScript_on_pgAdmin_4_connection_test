import {prisma} from "../../dbConfig/prisma.js";

export const createUser = async (email: string, name?: string) => {
  return prisma.user.create({
    data: { email, name:name ??null }
  });
};

export const getUsers = async () => {
  return prisma.user.findMany({
    include: { posts: true }
  });
};

export const getUserById = async (id: number) => {
  return prisma.user.findUnique({
    where: { id }
  });
};

export const updateUser = async (id: number, data: any) => {
  return prisma.user.update({
    where: { id },
    data
  });
};

export const deleteUser = async (id: number) => {
  return prisma.user.delete({
    where: { id }
  });
};
