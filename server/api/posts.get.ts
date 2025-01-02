export default defineEventHandler(async () => {
  const posts = await useKysely().selectFrom("posts").selectAll().execute();

  return { posts };
});
