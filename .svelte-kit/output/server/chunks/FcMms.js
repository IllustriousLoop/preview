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
  )}><path fill="${"#E91E63"}" d="${"M37 39H11l-6 6V11c0-3.3 2.7-6 6-6h26c3.3 0 6 2.7 6 6v22c0 3.3-2.7 6-6 6z"}"></path><path fill="${"#F48FB1"}" d="${"M20 16.5 10 31h20z"}"></path><g fill="${"#F8BBD0"}"><circle cx="${"34"}" cy="${"15"}" r="${"3"}"></circle><path d="${"m30 21-8 10h16z"}"></path></g></svg>`;
});
export {
  Component as default
};
