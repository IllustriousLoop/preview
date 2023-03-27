import { e as error } from "../../../../chunks/index.js";
import { I as IconsManifest, n as namesAllIcons } from "../../../../chunks/iconsManifest.js";
const load = async ({ params }) => {
  const { family } = params;
  const info = IconsManifest.filter((icon) => icon.id === family);
  const { content } = namesAllIcons.filter((icon) => icon.id === family)[0];
  if (info.length === 0)
    throw error(404, "Not found Bx");
  return {
    id: family,
    icons: content,
    info: info[0]
  };
};
export {
  load
};
