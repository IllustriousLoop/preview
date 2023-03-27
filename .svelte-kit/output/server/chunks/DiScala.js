import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 32 32" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#444"}" d="${"M8.573 7.307s14.853-1.485 14.853-3.961v5.941s0 2.476-14.853 3.961zm.063 7.922s14.853-1.485 14.853-3.961v5.941s0 2.476-14.853 3.961zm0 7.922s14.853-1.485 14.853-3.961v5.941s0 2.476-14.853 3.961z"}"></path></svg>`;
});
export {
  Component as default
};
