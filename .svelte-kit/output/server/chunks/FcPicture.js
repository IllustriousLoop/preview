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
  )}><path fill="${"#F57C00"}" d="${"M40 41H8c-2.2 0-4-1.8-4-4V11c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v26c0 2.2-1.8 4-4 4z"}"></path><circle cx="${"35"}" cy="${"16"}" r="${"3"}" fill="${"#FFF9C4"}"></circle><path fill="${"#942A09"}" d="${"M20 16 9 32h22z"}"></path><path fill="${"#BF360C"}" d="${"m31 22-8 10h16z"}"></path></svg>`;
});
export {
  Component as default
};
