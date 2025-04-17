import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { env } from '@/lib/env';
import * as schema from './schema';
import * as authSchema from './auth-schema';

// Merge all schemas
const fullSchema = { ...schema, ...authSchema };

// Create a connection pool
const pool = new Pool({
    connectionString: env.DATABASE_URL,
});

// Create the Drizzle ORM instance with merged schema
export const db = drizzle(pool, { schema: fullSchema });

// Export the pool for advanced use if needed
export { pool };
