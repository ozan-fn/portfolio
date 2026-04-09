import { p as prisma } from './prisma-DiHbNsVh.js';
import 'fs';
import 'path';
import 'os';
import 'crypto';
import '@prisma/client';
import '@prisma/adapter-neon';

const load = async () => {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });
  return {
    projects
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 17;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte--QHtTNp-.js')).default;
const server_id = "src/routes/(protected)/dashboard/projects/+page.server.ts";
const imports = ["_app/immutable/nodes/17.BiM3DGy8.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/VvJ03jQm.js","_app/immutable/chunks/Djhkul0P.js","_app/immutable/chunks/aMc0A5rF.js","_app/immutable/chunks/Bjwghsge.js","_app/immutable/chunks/0GSJgK-F.js","_app/immutable/chunks/DCbJqxLu.js","_app/immutable/chunks/B09lQ2ex.js","_app/immutable/chunks/BUb5hhcM.js","_app/immutable/chunks/Dcpp0Cf0.js","_app/immutable/chunks/DQtFMUgL.js","_app/immutable/chunks/D7ca1Gcz.js","_app/immutable/chunks/BiW6gY5k.js","_app/immutable/chunks/C4APV2ih.js","_app/immutable/chunks/ckv5DO_L.js","_app/immutable/chunks/BkBtMdJi.js","_app/immutable/chunks/6QoXeyAT.js","_app/immutable/chunks/DDcjaDo3.js","_app/immutable/chunks/DK-0CHpV.js","_app/immutable/chunks/CUdxX0no.js","_app/immutable/chunks/D2M3plr2.js","_app/immutable/chunks/BQsPnCUD.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=17-CwFIRF25.js.map
