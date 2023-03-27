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
  )}><path fill-rule="${"evenodd"}" d="${"m6 15.235 6 3.333 6-3.333v-6.47l-6-3.333-6 3.333v6.47ZM12 2 3 7v10l9 5 9-5V7l-9-5Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
