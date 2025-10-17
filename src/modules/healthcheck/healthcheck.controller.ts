import { Request, response, Response } from "express";
import ApiResponse from "../../utils/ApiResponse";

export default {
  async healthCheck(req: Request, res: Response) {
    try {
      ApiResponse.success(res, null, "server is healthy");
    } catch (error) {
      ApiResponse.errors(res, error, "internal server error");
    }
  },
};
