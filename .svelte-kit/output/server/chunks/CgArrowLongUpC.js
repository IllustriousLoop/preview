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
  )}><path fill-rule="${"evenodd"}" d="${"m7.758 5.23 4.274-4.21 4.21 4.275-1.424 1.403-1.804-1.83-.071 12.287a3.001 3.001 0 0 1-1.029 5.825 3 3 0 0 1-.971-5.835l.071-12.315-1.853 1.826L7.758 5.23Zm4.175 13.75a1 1 0 1 0-.01 2 1 1 0 0 0 .01-2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
