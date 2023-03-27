import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { version: "1" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#F57C00"}" d="${"M29 23H19L7 9h34z"}"></path><path fill="${"#FF9800"}" d="${"m29 38-10 6V23h10zM41.5 9h-35C5.7 9 5 8.3 5 7.5S5.7 6 6.5 6h35c.8 0 1.5.7 1.5 1.5S42.3 9 41.5 9z"}"></path></svg>`;
});
export {
  Component as default
};
