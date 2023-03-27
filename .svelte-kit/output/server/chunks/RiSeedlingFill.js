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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M22 7v2.5a6.5 6.5 0 0 1-6.5 6.5H13v5h-2v-7l.019-1A6.5 6.5 0 0 1 17.5 7H22zM6 3a7.004 7.004 0 0 1 6.643 4.786A7.477 7.477 0 0 0 10.016 13H9a7 7 0 0 1-7-7V3h4z"}"></path></svg>`;
});
export {
  Component as default
};
