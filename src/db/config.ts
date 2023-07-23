import { drizzle, type PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
const dbUrl = process.env.DATABASE_URL as string;
// const migrationClient = postgres(dbUrl, { max: 1 });
// migrate(drizzle(migrationClient), './migrations');

const queryClient = postgres(dbUrl);
export const db: PostgresJsDatabase = drizzle(queryClient);
