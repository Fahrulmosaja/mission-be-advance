import { Response } from "express";

export default {
  success(res: Response, data: any, message: string) {
    res.status(200).json({
      meta: {
        status: 200,
        message,
      },
      data,
    });
  },

  create(res: Response, data: any, message: string) {
    res.status(201).json({
      meta: {
        status: 201,
        message,
      },
      data,
    });
  },

  errors(res: Response, error: unknown, message: string) {
    if (error instanceof Error) {
      res.status(500).json({
        meta: {
          status: 500,
          message,
        },
        data: {
          error: error.message,
        },
      });
    }

    if ((error as any)?.code) {
      const _err = error as any;
      return res.status(500).json({
        meta: {
          status: 500,
          message: _err?.errorResponse?.errmsg || "server error",
        },
        data: _err,
      });
    }

    res.status(500).json({
      meta: {
        status: 500,
        message,
      },
      data: error,
    });
  },

  notFound(res: Response, message: string = "not found") {
    res.status(404).json({
      meta: {
        status: 404,
        message,
      },
      data: null,
    });
  },
};
