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
  )}><path fill="${"#0078EF"}" fill-rule="${"evenodd"}" d="${"M1 5h4v14h14v4H1V5Zm4-4h18v18h-4V5H5V1Z"}"></path></svg>`;
});
export {
  Component as default
};
