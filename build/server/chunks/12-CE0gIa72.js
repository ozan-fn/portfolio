import { p as prisma } from './prisma-DiHbNsVh.js';
import { f as fail } from './index-B2LGyy1l.js';
import 'fs';
import 'path';
import 'os';
import 'crypto';
import '@prisma/client';
import '@prisma/adapter-neon';

const load = async () => {
  const posts = await prisma.blogPost.findMany({
    include: {
      category: true
    },
    orderBy: {
      createdAt: "desc"
    }
  });
  return {
    posts
  };
};
const actions = {
  delete: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get("id");
    if (!id) {
      return fail(400, { message: "ID is required" });
    }
    try {
      await prisma.blogPost.delete({
        where: { id }
      });
      return { success: true };
    } catch (err) {
      console.error(err);
      return fail(500, { message: "Failed to delete blog post" });
    }
  },
  togglePublish: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get("id");
    const published = formData.get("published") === "true";
    if (!id) {
      return fail(400, { message: "ID is required" });
    }
    try {
      await prisma.blogPost.update({
        where: { id },
        data: { published: !published }
      });
      return { success: true };
    } catch (err) {
      console.error(err);
      return fail(500, { message: "Failed to update post status" });
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C2eBzwSD.js')).default;
const server_id = "src/routes/(protected)/dashboard/blog/+page.server.ts";
const imports = ["_app/immutable/nodes/12.CeZjGaft.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/VvJ03jQm.js","_app/immutable/chunks/Djhkul0P.js","_app/immutable/chunks/aMc0A5rF.js","_app/immutable/chunks/Bjwghsge.js","_app/immutable/chunks/0GSJgK-F.js","_app/immutable/chunks/DCbJqxLu.js","_app/immutable/chunks/B09lQ2ex.js","_app/immutable/chunks/BUb5hhcM.js","_app/immutable/chunks/Dcpp0Cf0.js","_app/immutable/chunks/DQtFMUgL.js","_app/immutable/chunks/D7ca1Gcz.js","_app/immutable/chunks/BiW6gY5k.js","_app/immutable/chunks/C4APV2ih.js","_app/immutable/chunks/ckv5DO_L.js","_app/immutable/chunks/BkBtMdJi.js","_app/immutable/chunks/6QoXeyAT.js","_app/immutable/chunks/C2mAS7Cg.js","_app/immutable/chunks/DDcjaDo3.js","_app/immutable/chunks/DK-0CHpV.js","_app/immutable/chunks/CUdxX0no.js","_app/immutable/chunks/B7AiSknQ.js","_app/immutable/chunks/dLzUUG9l.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=12-CE0gIa72.js.map
