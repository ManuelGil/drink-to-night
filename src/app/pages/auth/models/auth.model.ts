export interface AuthModel {
  id: number;
  username: string;
  password: string;
  email: string;
  roles: number[];
  fullname: string;
  firstname: string;
  lastname: string;
  occupation: string;
  companyName: string;
  phone: string;
  language: string;
  credentials: {
    authToken: string;
    refreshToken: string;
  };
}
