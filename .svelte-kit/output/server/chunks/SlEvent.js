import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 1024 1024" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M676 862c-16 0-28-13-28-29V691c0-16 12-28 28-28h142c16 0 29 12 29 28v142c0 16-13 29-29 29H676zm142-171H676v142h142V691zM960 96c35 0 64 29 64 64v800c0 35-29 64-64 64H64c-35 0-64-29-64-64V160c0-35 29-64 64-64h256V32c0-18 14-32 32-32s32 14 32 32v64h256V32c0-18 14-32 32-32s32 14 32 32v64h256zM64 960h896V160H704v32c0 18-14 32-32 32s-32-14-32-32v-32H384v32c0 18-14 32-32 32s-32-14-32-32v-32H64v800z"}"></path></svg>`;
});
export {
  Component as default
};
