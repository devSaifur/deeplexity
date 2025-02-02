import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './src/server/db/schema.ts',
  dialect: 'turso',
  casing: 'snake_case',
  dbCredentials: {
    url: process.env.DATABASE_URL!
  }
})
