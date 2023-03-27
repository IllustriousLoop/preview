import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M8.454 1.492.212 16h16.581L8.454 1.492zm.005 2.016L15.064 15H1.93L8.459 3.508zM9 10.938H8V7h1v3.938zm.5 2.093a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"}"></path></svg>`;
});
export {
  Component as default
};
