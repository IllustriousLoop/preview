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
  )}><path d="${"M12 4.67a7.298 7.298 0 0 1 5.183 2.147 7.267 7.267 0 0 1 1.898 3.285l1.79-1.79a1.832 1.832 0 0 1 2.592 2.59l-6.28 6.281A7.307 7.307 0 0 1 12 19.33a7.307 7.307 0 0 1-5.183-2.147 7.293 7.293 0 0 1-1.898-3.285l-1.791 1.79a1.832 1.832 0 1 1-2.591-2.59c2.092-2.094 4.19-4.19 5.95-5.951C8.183 5.287 10.258 4.672 12 4.67zm2.592 4.738a3.666 3.666 0 1 0-5.184 5.185 3.666 3.666 0 0 0 5.184-5.185z"}"></path></svg>`;
});
export {
  Component as default
};
