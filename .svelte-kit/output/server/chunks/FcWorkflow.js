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
  )}><path fill="${"#00BCD4"}" d="${"M7 31h10v10H7zm28.3-11.7-5.6-5.6c-.4-.4-.4-1 0-1.4l5.6-5.6c.4-.4 1-.4 1.4 0l5.6 5.6c.4.4.4 1 0 1.4l-5.6 5.6c-.4.4-1 .4-1.4 0z"}"></path><circle cx="${"12"}" cy="${"13"}" r="${"6"}" fill="${"#3F51B5"}"></circle><circle cx="${"36"}" cy="${"36"}" r="${"6"}" fill="${"#448AFF"}"></circle><g fill="${"#90A4AE"}"><path d="${"M11 24h2v5h-2z"}"></path><path d="${"m12 21-3 4h6z"}"></path></g><g fill="${"#90A4AE"}"><path d="${"M20 12h5v2h-5z"}"></path><path d="${"m28 13-4-3v6z"}"></path></g><g fill="${"#90A4AE"}"><path d="${"M35 21h2v5h-2z"}"></path><path d="${"m36 29 3-4h-6z"}"></path></g></svg>`;
});
export {
  Component as default
};
