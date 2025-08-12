import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: 'lib/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    host: 'localhost',
    port: 5432,
    user: process.env.DB_USER || 'hrushi',
    password: process.env.DB_PASSWORD || 'password123',
    database: 'frames2d',
    ssl: false,
  },
});
