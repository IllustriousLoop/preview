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
  )}><g fill="${"#8BC34A"}"><path d="${"M34 44H14c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v34c0 1.1-.9 2-2 2z"}"></path><path d="${"M28 13h-8c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1z"}"></path></g><path fill="${"#FFEB3B"}" d="${"M30 24h-5.5l2.2-11L18 26h5.5l-2.2 11z"}"></path></svg>`;
});
export {
  Component as default
};
