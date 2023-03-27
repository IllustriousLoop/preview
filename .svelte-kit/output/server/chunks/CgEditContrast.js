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
  )}><path d="${"M12 18a5.978 5.978 0 0 1-4-1.528A5.985 5.985 0 0 1 6 12c0-1.777.772-3.374 2-4.472A5.978 5.978 0 0 1 12 6v12Z"}"></path><path fill-rule="${"evenodd"}" d="${"M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm10 8a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
