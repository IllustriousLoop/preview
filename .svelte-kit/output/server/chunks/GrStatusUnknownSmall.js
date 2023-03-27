import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 12 12" },
      escape_object($$props)
    ],
    {}
  )}><rect x="${"1"}" y="${"1"}" fill-rule="${"evenodd"}" stroke="${"#000"}" rx="${"1"}"></rect></svg>`;
});
export {
  Component as default
};
