import prisma from "../../config/prisma";
import { UpdateUserDTO } from "./users.type";

export const findAllUsers = async () => {
  return prisma.userBase.findMany({
    include: { Profile: true },
  });
};

export const findOneUsers = async (id: number) => {
  return prisma.userBase.findUnique({
    where: { user_id: id },
    include: { Profile: true },
  });
};

export const updateUser = async (user_id: number, data: UpdateUserDTO) => {
  const existingProfile = await prisma.profileUser.findUnique({ where: { user_id } });

  if (existingProfile) {
    return prisma.profileUser.update({
      where: { user_id },
      data,
    });
  } else {
    return prisma.profileUser.create({
      data: { user_id, ...data },
    });
  }
};

export const deleteUser = async (id: number) => {
  await prisma.profileUser.deleteMany({ where: { user_id: id } });
  return prisma.userBase.delete({ where: { user_id: id } });
};
