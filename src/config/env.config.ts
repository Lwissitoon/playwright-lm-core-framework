import dotenv from 'dotenv';
dotenv.config();

export const EnvConfig = {
  project1: {
    url: process.env.P1_URL || 'https://practicetestautomation.com/practice-test-login/',
    user: process.env.P1_USER || 'student',
    pass: process.env.P1_PASS || 'Password123',
  },
  project2: {
    url: process.env.P2_URL || 'https://automationexercise.com/login',
    user: process.env.P2_USER || 'a29852@gmail.com',
    pass: process.env.P2_PASS || 'avenaquaker',
  }
};