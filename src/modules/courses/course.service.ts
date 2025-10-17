import prisma from "../../config/prisma";
import { CreateCourseDTO, UpdateCourseDTO } from "./course.type";

export const getAllCourses = async () => {
  return prisma.courseBase.findMany({
    include: {
      Category: true,
      UserBase: {
        select: { username: true, email: true },
      },
    },
    orderBy: { createdat: "desc" },
  });
};

export const getCourseById = async (id: number) => {
  return prisma.courseBase.findUnique({
    where: { course_id: id },
    include: {
      Category: true,
      UserBase: true,
      Sections: {
        include: {
          Lessons: true,
        },
      },
    },
  });
};

export const createCourse = async (data: CreateCourseDTO) => {
  let userId: number | null = null;
  if (data.user_id) {
    const user = await prisma.userBase.findUnique({
      where: { user_id: data.user_id },
    });
    if (!user) throw new Error("User not found");
    userId = data.user_id;
  }

  const categoryId = data.category_id ?? null;

  return prisma.courseBase.create({
    data: {
      course_name: data.course_name,
      description: data.description ?? null,
      price: data.price,
      duration: data.duration ?? null,
      certificate: data.certificate ?? false,
      user_id: userId,
      category_id: categoryId,
    },
  });
};

export const updateCourse = async (id: number, data: UpdateCourseDTO) => {
  return prisma.courseBase.update({
    where: { course_id: id },
    data,
  });
};

export const deleteCourse = async (id: number) => {
  return prisma.courseBase.delete({
    where: { course_id: id },
  });
};
