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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M12 2c2.21 0 4 1.79 4 4v9h1c.55 0 1-.45 1-1V8a1 1 0 0 1 2 0v6a3 3 0 0 1-3 3h-1v3h2v2H6v-2h2v-6H7a3 3 0 0 1-3-3V9a1 1 0 0 1 2 0v2c0 .55.45 1 1 1h1V6c0-2.21 1.79-4 4-4z"}"></path></svg>`;
});
export {
  Component as default
};
