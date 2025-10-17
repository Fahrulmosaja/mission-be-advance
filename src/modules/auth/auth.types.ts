export interface RegisterDTO {
  firsname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  no_hp?: string;
  role_id?: number;
}

export interface LoginDTO {
  email: string;
  password: string;
}
