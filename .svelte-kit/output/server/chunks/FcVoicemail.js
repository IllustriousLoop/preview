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
  )}><path fill="${"#4CAF50"}" d="${"M48 24c0-6.1-4.9-11-11-11s-11 4.9-11 11c0 2.7.9 5.1 2.5 7h-9c1.6-1.9 2.5-4.3 2.5-7 0-6.1-4.9-11-11-11S0 17.9 0 24s4.9 11 11 11h27v-.1c5.6-.5 10-5.2 10-10.9zM4 24c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zm33 7c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"}"></path></svg>`;
});
export {
  Component as default
};
