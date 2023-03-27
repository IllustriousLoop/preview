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
  )}><path fill-rule="${"evenodd"}" d="${"M5 2h14l-1.64 16.398A4 4 0 0 1 13.38 22h-2.76a4 4 0 0 1-3.98-3.602L5 2Zm2.51 5-.3-3h9.58l-.3 3H7.51Zm.2 2 .92 9.199A2 2 0 0 0 10.62 20h2.76a2 2 0 0 0 1.99-1.801L16.29 9H7.71Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
