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
  )}><circle cx="${"12"}" cy="${"21"}" r="${"5"}" fill="${"#FFA726"}"></circle><path fill="${"#455A64"}" d="${"M2 34.7s2.8-6.3 10-6.3 10 6.3 10 6.3V38H2v-3.3zm44 0s-2.8-6.3-10-6.3-10 6.3-10 6.3V38h20v-3.3z"}"></path><circle cx="${"24"}" cy="${"17"}" r="${"6"}" fill="${"#FFB74D"}"></circle><path fill="${"#607D8B"}" d="${"M36 34.1s-3.3-7.5-12-7.5-12 7.5-12 7.5V38h24v-3.9z"}"></path><circle cx="${"36"}" cy="${"21"}" r="${"5"}" fill="${"#FFA726"}"></circle><circle cx="${"12"}" cy="${"21"}" r="${"5"}" fill="${"#FFA726"}"></circle><circle cx="${"36"}" cy="${"21"}" r="${"5"}" fill="${"#FFA726"}"></circle></svg>`;
});
export {
  Component as default
};
