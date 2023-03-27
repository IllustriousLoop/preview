import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M73 25v62h78V25H73zm96 0v62h78V25h-78zm96 0v62h78V25h-34.8L297 58.6 278 25h-13zm96 0v62h78V25h-78zM41 105v24.4L53.21 151H471v-46H41zm32 64v174h78V169H73zm96 0v174h78V169h-78zm96 0v174h78V169h-78zm96 0v151.9l12.5 22.1H439V169h-78zM41 361v46h430v-46H41zm32 64v62h68l10-30.2V425H73zm96 0v62h78v-62h-78zm96 0v62h78v-62h-78zm96 0v62h78v-62h-78z"}"></path></svg>`;
});
export {
  Component as default
};
