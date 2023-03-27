import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zm1.69-6.929-.975.563 1 1.732.976-.563c.501.51 1.14.887 1.854 1.071V16h2v-1.126a3.996 3.996 0 0 0 1.854-1.071l.976.563 1-1.732-.975-.563a4.004 4.004 0 0 0 0-2.142l.975-.563-1-1.732-.976.563A3.996 3.996 0 0 0 13 7.126V6h-2v1.126a3.996 3.996 0 0 0-1.854 1.071l-.976-.563-1 1.732.975.563a4.004 4.004 0 0 0 0 2.142zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}"></path></svg>`;
});
export {
  Component as default
};
