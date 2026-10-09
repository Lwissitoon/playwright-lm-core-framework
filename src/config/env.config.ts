import dotenv from 'dotenv';
dotenv.config();

export const EnvConfig = {
  project1: {
    url: process.env.P1_URL || 'https://example.com/p1/login',
    user: process.env.P1_USER || 'user_p1@test.com',
    pass: process.env.P1_PASS || 'PasswordP1!',
  },
  project2: {
    url: process.env.P2_URL || 'https://automationexercise.com/login',
    user: process.env.P2_USER || 'user_p2@test.com',
    pass: process.env.P2_PASS || 'PasswordP2!',
  }
};