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
  )}><path d="${"M13.399 6.85a2 2 0 0 0-2.002-1.998l-8 .007-.002-2 8-.007a4 4 0 0 1 4.004 3.996l.01 10.306 3.78-3.788 1.416 1.412-6.358 6.37-6.37-6.358 1.413-1.415 4.119 4.11-.01-10.635Z"}"></path></svg>`;
});
export {
  Component as default
};
