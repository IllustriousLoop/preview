import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 32 32" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#444"}" d="${"M14.392 17.894h6.432v1.608h-6.432v-1.608zm-4.824 1.608 4.824-4.824-4.824-4.824-1.608 1.608 3.216 3.216-3.216 3.216z"}"></path></svg>`;
});
export {
  Component as default
};
