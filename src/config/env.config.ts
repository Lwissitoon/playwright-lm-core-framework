import dotenv from 'dotenv';
dotenv.config();

export const EnvConfig = {
  project1: {
    url: process.env.P1_URL || 'https://project1.com',
    user: process.env.P1_USER || 'admin1@test.com',
  },
  project2: {
    url: process.env.P2_URL || 'https://project2.com/auth',
    user: process.env.P2_USER || 'admin2@test.com',
  }
};
