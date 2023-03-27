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
  )}><path d="${"M10 4.5h1v2h-1v-2Zm4 0h-1v2h1v-2Z"}"></path><path fill-rule="${"evenodd"}" d="${"M7 8.5v-7h10v7h2v11a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-11h2Zm2-5h6v5H9v-5Zm8 7H7v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-9Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
