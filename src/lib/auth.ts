import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from './db';
// Import the generated schema if you want to customize or extend it:
// import * as authSchema from './db/auth-schema';

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: 'pg',
        // schema: authSchema, // Uncomment if you want to pass the generated schema
        usePlural: true, // Most Drizzle schemas use plural table names
    }),
    emailAndPassword: {
        enabled: true,
    },
    // Add more providers or config as needed
});
