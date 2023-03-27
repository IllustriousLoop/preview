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
  )}><path fill-rule="${"evenodd"}" d="${"M2 12C2 6.477 6.477 2 12 2v2h8v8h2c0 5.523-4.477 10-10 10S2 17.523 2 12Zm16 0h-2V8h-4V6a6 6 0 1 0 6 6Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
