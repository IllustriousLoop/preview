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
  )}><path d="${"M459.9 435.5 76.1 52.5 51.9 76.6 160 184.3V272h64v192l72-144 139.9 139.5zM352 208h-64l64-160H160v40.3l168 167.6z"}"></path></svg>`;
});
export {
  Component as default
};
