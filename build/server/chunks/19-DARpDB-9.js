import { p as prisma } from './prisma-DiHbNsVh.js';
import { f as fail, r as redirect, e as error } from './index-B2LGyy1l.js';
import 'fs';
import 'path';
import 'os';
import 'crypto';
import '@prisma/client';
import '@prisma/adapter-neon';

const load = async ({ params }) => {
  const project = await prisma.project.findUnique({
    where: { id: params.id }
  });
  if (!project) {
    throw error(404, "Project not found");
  }
  return {
    project
  };
};
const actions = {
  update: async ({ request, params }) => {
    const formData = await request.formData();
    const title = formData.get("title");
    const description = formData.get("description");
    const content = formData.get("content");
    const thumbnail = formData.get("thumbnail");
    const githubUrl = formData.get("githubUrl");
    const demoUrl = formData.get("demoUrl");
    const status = formData.get("status");
    const techStackString = formData.get("techStack");
    if (!title || !description) {
      return fail(400, {
        error: "Title and description are required",
        values: { title, description, content, thumbnail, githubUrl, demoUrl, status, techStackString }
      });
    }
    const techStack = techStackString ? techStackString.split(",").map((s) => s.trim()).filter(Boolean) : [];
    try {
      await prisma.project.update({
        where: { id: params.id },
        data: {
          title,
          description,
          content,
          thumbnail,
          githubUrl,
          demoUrl,
          status: status || "COMPLETED",
          techStack
        }
      });
    } catch (err) {
      console.error(err);
      return fail(500, { error: "Failed to update project" });
    }
    throw redirect(303, "/dashboard/projects");
  },
  delete: async ({ params }) => {
    try {
      await prisma.project.delete({
        where: { id: params.id }
      });
    } catch (err) {
      console.error(err);
      return fail(500, { error: "Failed to delete project" });
    }
    throw redirect(303, "/dashboard/projects");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 19;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CUArX_bn.js')).default;
const server_id = "src/routes/(protected)/dashboard/projects/[id]/+page.server.ts";
const imports = ["_app/immutable/nodes/19.KPQ8PiW8.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/VvJ03jQm.js","_app/immutable/chunks/aMc0A5rF.js","_app/immutable/chunks/Bjwghsge.js","_app/immutable/chunks/B09lQ2ex.js","_app/immutable/chunks/BUb5hhcM.js","_app/immutable/chunks/Dcpp0Cf0.js","_app/immutable/chunks/Djhkul0P.js","_app/immutable/chunks/DQtFMUgL.js","_app/immutable/chunks/CrSlENNL.js","_app/immutable/chunks/C4APV2ih.js","_app/immutable/chunks/BiW6gY5k.js","_app/immutable/chunks/Eg2tcwNS.js","_app/immutable/chunks/6QoXeyAT.js","_app/immutable/chunks/0GSJgK-F.js","_app/immutable/chunks/Bcgd6PdG.js","_app/immutable/chunks/D79W2KkM.js","_app/immutable/chunks/ujjKYITF.js","_app/immutable/chunks/wDDnU9Kk.js","_app/immutable/chunks/DCbJqxLu.js","_app/immutable/chunks/LBiaOXUj.js","_app/immutable/chunks/DDcjaDo3.js","_app/immutable/chunks/CUdxX0no.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=19-DARpDB-9.js.map
