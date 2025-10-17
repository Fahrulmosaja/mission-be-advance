import { Request, Response } from "express";
import * as userService from "./users.service";
import ApiResponse from "../../utils/ApiResponse";

export default {
  async findAll(req: Request, res: Response) {
    try {
      const users = await userService.findAllUsers();
      ApiResponse.success(res, users, "Success get all users");
    } catch (error) {
      ApiResponse.errors(res, error, "Error get all users");
    }
  },

  async findOne(req: Request, res: Response) {
    try {
      const user = await userService.findOneUsers(Number(req.params.id));
      if (!user) return ApiResponse.errors(res, {}, "User not found");
      ApiResponse.success(res, user, "success get detail user");
    } catch (error) {
      ApiResponse.errors(res, error, "Error");
    }
  },

  async update(req: Request, res: Response) {
    try {
      const updated = await userService.updateUser(Number(req.params.id), req.body);
      ApiResponse.success(res, updated, "success updated profile");
    } catch (error) {
      ApiResponse.errors(res, error, "Error updated profile");
    }
  },

  async deletd(req: Request, res: Response) {
    try {
      await userService.deleteUser(Number(req.params.id));
      res.json({ meta: { status: 200, message: "User deleted" } });
    } catch (error) {
      ApiResponse.errors(res, error, "Error deleted user");
    }
  },
};
