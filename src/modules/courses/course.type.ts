export interface CreateCourseDTO {
  course_name: string;
  description?: string;
  user_id?: number;
  category_id?: number;
  price: number;
  duration?: number;
  certificate?: boolean;
}

export interface UpdateCourseDTO {
  course_name?: string;
  description?: string;
  category_id?: number;
  price?: number;
  duration?: number;
  certificate?: boolean;
}
