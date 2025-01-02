import { Generated, Insertable, Selectable, Updateable } from "kysely";

export interface PostsTable {
  id: Generated<number>;
  title: string;
  content: string;
}

export type Post = Selectable<PostsTable>;
export type PostCreate = Insertable<PostsTable>;
export type PostUpdate = Updateable<PostsTable>;
