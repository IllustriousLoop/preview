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
  )}><path fill="${"#E65100"}" d="${"M41 42H13c-2.2 0-4-1.8-4-4V18c0-2.2 1.8-4 4-4h28c2.2 0 4 1.8 4 4v20c0 2.2-1.8 4-4 4z"}"></path><path fill="${"#F57C00"}" d="${"M35 36H7c-2.2 0-4-1.8-4-4V12c0-2.2 1.8-4 4-4h28c2.2 0 4 1.8 4 4v20c0 2.2-1.8 4-4 4z"}"></path><circle cx="${"30"}" cy="${"16"}" r="${"3"}" fill="${"#FFF9C4"}"></circle><path fill="${"#942A09"}" d="${"M17 17.9 8 31h18z"}"></path><path fill="${"#BF360C"}" d="${"M28 23.5 22 31h12z"}"></path></svg>`;
});
export {
  Component as default
};
