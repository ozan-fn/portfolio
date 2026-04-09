import { p as prisma } from './prisma-DiHbNsVh.js';
import { e as error } from './index-B2LGyy1l.js';
import 'fs';
import 'path';
import 'os';
import 'crypto';
import '@prisma/client';
import '@prisma/adapter-neon';

const load = async ({ params }) => {
  const project = await prisma.project.findUnique({
    where: {
      id: params.id
    }
  });
  if (!project) {
    throw error(404, "Project not found");
  }
  return {
    project
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 20;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Ds26OGQ7.js')).default;
const server_id = "src/routes/(protected)/dashboard/projects/[id]/view/+page.server.ts";
const imports = ["_app/immutable/nodes/20.DBDX_uiF.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/VvJ03jQm.js","_app/immutable/chunks/Djhkul0P.js","_app/immutable/chunks/aMc0A5rF.js","_app/immutable/chunks/Bjwghsge.js","_app/immutable/chunks/0GSJgK-F.js","_app/immutable/chunks/DQtFMUgL.js","_app/immutable/chunks/C4APV2ih.js","_app/immutable/chunks/BiW6gY5k.js","_app/immutable/chunks/ckv5DO_L.js","_app/immutable/chunks/6QoXeyAT.js","_app/immutable/chunks/DUnKheq_.js","_app/immutable/chunks/Eg2tcwNS.js","_app/immutable/chunks/BQsPnCUD.js","_app/immutable/chunks/DK-0CHpV.js","_app/immutable/chunks/D2M3plr2.js","_app/immutable/chunks/CMusbjW7.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=20-DX0bISpV.js.map
