import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M7.295 8.5A3.648 3.648 0 1 1 0 8.499a3.648 3.648 0 0 1 7.295.001zM17 8.5a3.648 3.648 0 0 1-7.295 0A3.648 3.648 0 0 1 17 8.5zm-1 0a2.65 2.65 0 0 0-2.649-2.647c-1.459 0-2.646 1.188-2.646 2.647s1.187 2.647 2.646 2.647A2.65 2.65 0 0 0 16 8.5z"}"></path></svg>`;
});
export {
  Component as default
};
