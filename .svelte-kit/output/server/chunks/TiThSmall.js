import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><circle cx="${"5"}" cy="${"19"}" r="${"2.5"}"></circle><circle cx="${"5"}" cy="${"12"}" r="${"2.5"}"></circle><circle cx="${"5"}" cy="${"5"}" r="${"2.5"}"></circle><circle cx="${"12"}" cy="${"19"}" r="${"2.5"}"></circle><circle cx="${"12"}" cy="${"12"}" r="${"2.5"}"></circle><circle cx="${"12"}" cy="${"5"}" r="${"2.5"}"></circle><circle cx="${"19"}" cy="${"19"}" r="${"2.5"}"></circle><circle cx="${"19"}" cy="${"12"}" r="${"2.5"}"></circle><circle cx="${"19"}" cy="${"5"}" r="${"2.5"}"></circle></svg>`;
});
export {
  Component as default
};
