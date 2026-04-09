import { p as prisma } from './prisma-DiHbNsVh.js';
import { f as fail, r as redirect } from './index-B2LGyy1l.js';
import 'fs';
import 'path';
import 'os';
import 'crypto';
import '@prisma/client';
import '@prisma/adapter-neon';

const load = async () => {
  const categories = await prisma.category.findMany({
    orderBy: {
      name: "asc"
    }
  });
  return {
    categories
  };
};
const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const title = formData.get("title");
    const content = formData.get("content");
    const image = formData.get("image");
    const categoryId = formData.get("categoryId");
    const published = formData.get("published") === "true";
    if (!title || !content || !categoryId) {
      return fail(400, {
        error: "Title, content, and category are required",
        values: { title, content, image, categoryId, published }
      });
    }
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
    try {
      const existingPost = await prisma.blogPost.findUnique({
        where: { slug }
      });
      const finalSlug = existingPost ? `${slug}-${Math.floor(Math.random() * 1e3)}` : slug;
      await prisma.blogPost.create({
        data: {
          title,
          slug: finalSlug,
          content,
          image,
          published,
          categoryId
        }
      });
    } catch (err) {
      console.error(err);
      return fail(500, { error: "Failed to create blog post" });
    }
    throw redirect(303, "/dashboard/blog");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CwNlXHOz.js')).default;
const server_id = "src/routes/(protected)/dashboard/blog/new/+page.server.ts";
const imports = ["_app/immutable/nodes/13.D86m4CDR.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/VvJ03jQm.js","_app/immutable/chunks/Djhkul0P.js","_app/immutable/chunks/aMc0A5rF.js","_app/immutable/chunks/0GSJgK-F.js","_app/immutable/chunks/Bjwghsge.js","_app/immutable/chunks/DQtFMUgL.js","_app/immutable/chunks/CrSlENNL.js","_app/immutable/chunks/C4APV2ih.js","_app/immutable/chunks/BiW6gY5k.js","_app/immutable/chunks/Eg2tcwNS.js","_app/immutable/chunks/6QoXeyAT.js","_app/immutable/chunks/Bcgd6PdG.js","_app/immutable/chunks/B09lQ2ex.js","_app/immutable/chunks/BUb5hhcM.js","_app/immutable/chunks/Dcpp0Cf0.js","_app/immutable/chunks/D79W2KkM.js","_app/immutable/chunks/ujjKYITF.js","_app/immutable/chunks/wDDnU9Kk.js","_app/immutable/chunks/DCbJqxLu.js","_app/immutable/chunks/LBiaOXUj.js","_app/immutable/chunks/B7AiSknQ.js","_app/immutable/chunks/dLzUUG9l.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=13-OocZMJ9a.js.map
