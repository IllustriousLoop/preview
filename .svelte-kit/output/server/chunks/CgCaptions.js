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
  )}><path d="${"M11 8v2H8v4h3v2H6V8h5Zm7 0v2h-3v4h3v2h-5V8h5Z"}"></path><path fill-rule="${"evenodd"}" d="${"M2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5Zm2 13V6h16v12H4Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
