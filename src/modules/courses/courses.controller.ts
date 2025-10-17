import { Request, Response } from "express";
import * as courseService from "./course.service";
import ApiResponse from "../../utils/ApiResponse";

export default {
  async create(req: Request, res: Response) {
    try {
      const newCourse = await courseService.createCourse(req.body);
      ApiResponse.create(res, newCourse, "success create course");
    } catch (error) {
      ApiResponse.errors(res, error, "failed create product");
    }
  },

  async findAll(_req: Request, res: Response) {
    try {
      const courses = await courseService.getAllCourses();
      ApiResponse.success(res, courses, "success get courses");
    } catch (error) {
      ApiResponse.errors(res, error, "courses not found");
    }
  },

  async findOne(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const course = await courseService.getCourseById(id);
      if (!course) return ApiResponse.errors(res, course, "Course not found");
      ApiResponse.success(res, course, "success get course detail");
    } catch (error) {
      ApiResponse.errors(res, error, "courses not found");
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const updated = await courseService.updateCourse(id, req.body);
      ApiResponse.success(res, updated, "success update course");
    } catch (error) {
      ApiResponse.errors(res, error, "failed update course");
    }
  },

  async deleted(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await courseService.deleteCourse(id);
      ApiResponse.success(res, id, "success delete course");
    } catch (error) {
      ApiResponse.errors(res, error, "failed delete course");
    }
  },
};
