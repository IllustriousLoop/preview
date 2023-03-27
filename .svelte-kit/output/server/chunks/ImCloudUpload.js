import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M13.942 6.039a2.5 2.5 0 0 0-3.085-2.955 3 3 0 0 0-5.737.075A4 4 0 1 0 4 11h2v3h4v-3h3.5a2.5 2.5 0 0 0 .442-4.961zM9 10v3H7v-3H4.5L8 6.5l3.5 3.5H9z"}"></path></svg>`;
});
export {
  Component as default
};
