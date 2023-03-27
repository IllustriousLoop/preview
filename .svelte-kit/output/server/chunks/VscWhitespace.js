import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M12 2V1H6.5a3.5 3.5 0 0 0 0 7H8v5H7v1h5v-1h-1V2h1zM8 7H6.5a2.5 2.5 0 1 1 0-5H8v5zm2 6H9V2h1v11z"}"></path></svg>`;
});
export {
  Component as default
};
