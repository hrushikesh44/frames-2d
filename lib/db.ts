import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { schema } from './db/schema';

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: process.env.DB_USER || 'hrushi',
  password: process.env.DB_PASSWORD || 'password123',
  database: 'frames2d',
  ssl: false,
});

export const db = drizzle(pool, { schema });
