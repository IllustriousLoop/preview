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
  )}><path fill-rule="${"evenodd"}" d="${"M12 8 7 6v10l5 2.5 5-2.5V6l-5 2Zm3 .954-3 1.2-3-1.2v5.81l3 1.5 3-1.5v-5.81Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
