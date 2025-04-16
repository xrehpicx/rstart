import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const hello = pgTable('hello', {
    id: serial('id').primaryKey(),
    greeting: text('greeting').notNull(),
});
