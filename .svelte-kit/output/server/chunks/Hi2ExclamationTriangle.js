import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { "aria-hidden": "true" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M9.401 4.504c1.155-2.001 4.043-2.001 5.197 0l7.355 12.747c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 4.504zM12 9.75a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V10.5a.75.75 0 0 1 .75-.75zM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
