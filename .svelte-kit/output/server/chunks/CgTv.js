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
  )}><path fill-rule="${"evenodd"}" d="${"m8 6.119 1.413-1.413 2.124 2.124L14.367 4l1.411 1.412-2.464 2.464H18a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3.757L8 6.119Zm10 3.757H6v7h12v-7Z"}" clip-rule="${"evenodd"}"></path><path d="${"M8 19.876h8v1H8v-1Z"}"></path></svg>`;
});
export {
  Component as default
};
