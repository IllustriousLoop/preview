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
  )}><path d="${"m320 32 32 16c0 32 16 48 32 96 0 0 16 32.7 16 48 0 48-16 96-32 144s32 96 48 160H96c16-64 64-112 48-160s-32-96-32-144c0-16 16-48 16-48 16-48 32-64 32-96l32-16c0 64 32 144 64 144s64-80 64-144z"}"></path></svg>`;
});
export {
  Component as default
};
