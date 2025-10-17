import prisma from "../../config/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { RegisterDTO, LoginDTO } from "./auth.types";
import { JWT_SECRET } from "../../utils/env";

export const registerUser = async (data: RegisterDTO) => {
  const { email, username, password, confirmPassword, firsname, lastname } = data;

  if (!email || !username || !password || !confirmPassword || !firsname || !lastname) {
    throw new Error("All fields are required");
  }

  if (password !== confirmPassword) {
    throw new Error("Passwords do not match");
  }

  const existingUser = await prisma.userBase.findUnique({
    where: { email },
  });

  if (existingUser) throw new Error("Email already registered");

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.userBase.create({
    data: {
      firsname,
      lastname,
      username,
      email,
      password: hashPassword,
    },
  });

  return newUser;
};

export const loginUser = async (data: LoginDTO) => {
  const { email, password } = data;

  const user = await prisma.userBase.findUnique({
    where: { email },
  });
  if (!user) throw new Error("Invalid credentials");

  const token = jwt.sign(
    {
      id: user.user_id,
      email: user.email,
    },
    JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  return { token, user };
};
