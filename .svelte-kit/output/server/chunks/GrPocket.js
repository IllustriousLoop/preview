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
  )}><g fill="${"none"}" fill-rule="${"evenodd"}"><path fill="${"#F50057"}" d="${"M12 2H2a2 2 0 0 0-2 2v8c0 5.982 6 11 12 11s12-5.018 12-11V4a2 2 0 0 0-2-2H12Z"}"></path><path stroke="${"#FFF"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"3"}" d="${"m6 9 6.404 6L18 9"}"></path></g></svg>`;
});
export {
  Component as default
};
