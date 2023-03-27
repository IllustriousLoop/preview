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
  )}><path stroke="${"#000"}" stroke-linecap="${"round"}" stroke-width="${"2"}" d="${"M20 22H4"}"></path><path stroke="${"#000"}" stroke-width="${"2"}" d="${"M15.5 18v3m-7.5.5V18"}"></path><path stroke="${"#000"}" stroke-width="${"2"}" d="${"M12 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"}" clip-rule="${"evenodd"}"></path><path stroke="${"#000"}" stroke-width="${"2"}" d="${"M12 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"}" clip-rule="${"evenodd"}"></path><path stroke="${"#000"}" stroke-width="${"2"}" d="${"M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"}" clip-rule="${"evenodd"}"></path><path stroke="${"#000"}" stroke-width="${"2"}" d="${"M12 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
