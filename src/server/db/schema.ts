import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('user', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  email: text().unique().notNull()
})
