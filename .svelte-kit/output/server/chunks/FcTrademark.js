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
  )}><circle cx="${"24"}" cy="${"24"}" r="${"21"}" fill="${"#9C27B0"}"></circle><path fill="${"#E1BEE7"}" d="${"M20.6 18.5h-4.2v14.2h-3.5V18.5H8.7v-2.9h11.9v2.9zm6.5-2.9L30.3 28l3.2-12.4H38v17.1h-3.5v-4.6l.3-7.1-3.4 11.8H29L25.7 21l.3 7.1v4.6h-3.5V15.6h4.6z"}"></path></svg>`;
});
export {
  Component as default
};
