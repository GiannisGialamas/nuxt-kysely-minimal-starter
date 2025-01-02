import { defineConfig } from "kysely-ctl";
import { useKysely } from "./server/utils/kysely";

export default defineConfig({
  migrations: { migrationFolder: "server/database/migrations" },
  seeds: { seedFolder: "server/database/seeders" },
  kysely: useKysely(),
});
