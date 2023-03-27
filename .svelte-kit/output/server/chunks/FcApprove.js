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
  )}><g fill="${"#FFCC80"}"><circle cx="${"38"}" cy="${"26"}" r="${"4"}"></circle><circle cx="${"10"}" cy="${"26"}" r="${"4"}"></circle><path d="${"M39 19c0-12.7-30-8.3-30 0v10c0 8.3 6.7 15 15 15s15-6.7 15-15V19z"}"></path><path d="${"M24 4C15.2 4 8 11.2 8 20v3.5l2.1.6V19l19.5-6.3 8.2 6.3v5.1l2.1-.6V20C40 12.5 34.6 4 24 4z"}"></path></g><path fill="${"#4CAF50"}" d="${"M32.6 18.6 22.3 28.9 17.4 24l-2.8 2.8 7.7 7.7 13.1-13.1z"}"></path></svg>`;
});
export {
  Component as default
};
