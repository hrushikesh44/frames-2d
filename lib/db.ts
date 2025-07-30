import 'dotenv/config'
import { drizzle } from 'drizzle-orm/neon-http';
import { schema } from './db/schema';

if(!process.env.DATABASE_URL){
    throw new Error("Database url is not defined")
}
export const db = drizzle(process.env.DATABASE_URL, { schema: schema });