import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 20 20" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M5 4a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H5zm-1 9v-1h5v2H5a1 1 0 0 1-1-1zm7 1h4a1 1 0 0 0 1-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
