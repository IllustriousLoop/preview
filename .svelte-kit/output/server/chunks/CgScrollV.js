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
  )}><path d="${"m9.172 16.818-1.415 1.414L12 22.475l4.243-4.243-1.415-1.414L12 19.647l-2.828-2.829Zm5.656-9.636 1.415-1.414L12 1.525 7.757 5.768l1.415 1.414L12 4.354l2.828 2.828Z"}"></path><path fill-rule="${"evenodd"}" d="${"M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
