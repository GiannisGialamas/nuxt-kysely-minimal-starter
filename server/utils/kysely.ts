import SQLite from "better-sqlite3";
import { CamelCasePlugin, Kysely, SqliteDialect } from "kysely";
import { Database } from "../database";

export function useKysely() {
  const dialect = new SqliteDialect({
    database: new SQLite("database.db"),
  });

  return new Kysely<Database>({
    dialect,
    plugins: [new CamelCasePlugin()],
  });
}
