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
  )}><path fill-rule="${"evenodd"}" d="${"M4 9a8 8 0 1 1 16 0v2h-6.981v9.5a2.5 2.5 0 0 1-5 0v-2.643h2V20.5a.5.5 0 1 0 1 0V11H4V9Zm8-6a6 6 0 0 1 6 6H6a6 6 0 0 1 6-6Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
