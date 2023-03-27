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
  )}><circle cx="${"4"}" cy="${"7"}" r="${"2"}"></circle><circle cx="${"9"}" cy="${"12"}" r="${"2"}"></circle><circle cx="${"15"}" cy="${"7"}" r="${"2"}"></circle><circle cx="${"15"}" cy="${"12"}" r="${"2"}"></circle><circle cx="${"15"}" cy="${"17"}" r="${"2"}"></circle><circle cx="${"20"}" cy="${"7"}" r="${"2"}"></circle><circle cx="${"4"}" cy="${"17"}" r="${"2"}"></circle></svg>`;
});
export {
  Component as default
};
