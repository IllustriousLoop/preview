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
  )}><path fill-rule="${"evenodd"}" d="${"M4 1 3 2v12l1 1h8l1-1V2l-1-1H4zm0 2V2h8v12H4v-1h2v-1H4v-2h4V9H4V7h2V6H4V4h4V3H4z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
