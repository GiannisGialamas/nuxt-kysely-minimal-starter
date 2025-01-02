import type { Kysely } from "kysely";

export async function seed(db: Kysely<any>): Promise<void> {
  await db
    .insertInto("posts")
    .values({
      title: "example post",
      content: "example post content",
    })
    .execute();
}
