import dotenv from 'dotenv';
dotenv.config();

const config = {
  baseURL: process.env.BASE_URL,
  credentials: {
    username: process.env.LOGIN_USER,
    password: process.env.LOGIN_PASSWORD,
  },
};

export { config };