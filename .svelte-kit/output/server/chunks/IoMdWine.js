import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M234.667 277.333V408H128v40h256v-40H277.333V277.333L448 106.667V64H64v42.667l170.667 170.666zm-74.667-128-42.667-42.666h277.334L352 149.333H160z"}"></path></svg>`;
});
export {
  Component as default
};
