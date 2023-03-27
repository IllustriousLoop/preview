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
  )}><path fill="${"#009688"}" d="${"M37 39H11l-6 6V11c0-3.3 2.7-6 6-6h26c3.3 0 6 2.7 6 6v22c0 3.3-2.7 6-6 6z"}"></path><g fill="${"#fff"}"><circle cx="${"24"}" cy="${"22"}" r="${"3"}"></circle><circle cx="${"34"}" cy="${"22"}" r="${"3"}"></circle><circle cx="${"14"}" cy="${"22"}" r="${"3"}"></circle></g></svg>`;
});
export {
  Component as default
};
