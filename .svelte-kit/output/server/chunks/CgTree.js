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
  )}><path fill-rule="${"evenodd"}" d="${"M11 17.9A5.002 5.002 0 0 1 7 13V7a5 5 0 0 1 10 0v6a5.002 5.002 0 0 1-4 4.9V21a1 1 0 1 1-2 0v-3.1ZM12 4a3 3 0 0 1 3 3v6a3.001 3.001 0 0 1-2 2.83V11a1 1 0 1 0-2 0v4.83A3.001 3.001 0 0 1 9 13V7a3 3 0 0 1 3-3Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
