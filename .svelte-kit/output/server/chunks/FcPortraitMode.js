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
  )}><path fill="${"#FF9800"}" d="${"M22 38c-4.8 0-5-7-5-7v-6h10v6s-.2 7-5 7z"}"></path><g fill="${"#FFA726"}"><circle cx="${"31"}" cy="${"19"}" r="${"2"}"></circle><circle cx="${"13"}" cy="${"19"}" r="${"2"}"></circle></g><path fill="${"#FFB74D"}" d="${"M31 13c0-7.6-18-5-18 0v7c0 5 4 9 9 9s9-4 9-9v-7z"}"></path><path fill="${"#424242"}" d="${"M22 4c-6.1 0-10 4.9-10 11v2.3l2 1.7v-5l12-4 4 4v5l2-1.7V15c0-4-1-8-6-9l-1-2h-3z"}"></path><g fill="${"#784719"}"><circle cx="${"26"}" cy="${"19"}" r="${"1"}"></circle><circle cx="${"18"}" cy="${"19"}" r="${"1"}"></circle></g><path fill="${"#009688"}" d="${"M27 31s-1.8 2-5 2-5-2-5-2S6 33 6 44h32c0-11-11-13-11-13z"}"></path><g fill="${"#FF9800"}"><path d="${"m40.997 4.065 7 7-7 6.999-7-7z"}"></path><path d="${"M36 6h10v10H36z"}"></path></g><circle cx="${"41"}" cy="${"11"}" r="${"3"}" fill="${"#FFEB3B"}"></circle></svg>`;
});
export {
  Component as default
};
