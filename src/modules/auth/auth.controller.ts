import { Request, Response } from "express";

import * as AuthService from "./auth.service";
import ApiResponse from "../../utils/ApiResponse";

export default {
  async register(req: Request, res: Response) {
    try {
      const user = await AuthService.registerUser(req.body);
      ApiResponse.success(res, user, "Register Success");
    } catch (error) {
      ApiResponse.errors(res, error, "Register Failed");
    }
  },

  async login(req: Request, res: Response) {
    try {
      const result = await AuthService.loginUser(req.body);
      ApiResponse.success(res, result, "Login success");
    } catch (error) {
      ApiResponse.errors(res, error, "Login failed");
    }
  },
};
