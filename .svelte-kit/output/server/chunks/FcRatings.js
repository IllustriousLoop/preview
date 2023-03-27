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
  )}><path fill="${"#42A5F5"}" d="${"M36 44H8V8h20l8 8z"}"></path><path fill="${"#90CAF9"}" d="${"M40 40H12V4h20l8 8z"}"></path><path fill="${"#E1F5FE"}" d="${"M38.5 13H31V5.5z"}"></path><path fill="${"#1976D2"}" d="${"M34 20h-7l2.4 2.4-2.4 2.5-4-4-6.1 6 2.2 2.2 3.9-4 4 4 4.6-4.5L34 27z"}"></path></svg>`;
});
export {
  Component as default
};
