import { drizzle, type PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';


const dbUrl = process.env.DATABASE_URL as string;
const migrationClient = postgres(dbUrl, { max: 1 });

migrate(drizzle(migrationClient), __dirname + '/migrations');

const queryClient = postgres(dbUrl);
export const db: PostgresJsDatabase = drizzle(queryClient);
