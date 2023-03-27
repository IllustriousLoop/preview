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
  )}><path fill-rule="${"evenodd"}" d="${"M15 17h4V8A7 7 0 1 0 5 8v9h4v3a3 3 0 1 0 6 0v-3Zm2-2V8A5 5 0 0 0 7 8v7h4v5a1 1 0 1 0 2 0v-5h4Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
