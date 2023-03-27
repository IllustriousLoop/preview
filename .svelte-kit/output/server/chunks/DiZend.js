import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 32 32" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#444"}" d="${"M15.334 14.023s0-2.972 2.972-2.972h8.917s0 2.972-2.972 2.972h-8.917zm0 3.798s0-2.972 2.972-2.972h4.459s0 2.972-2.972 2.972h-4.459zm0 3.798s0-2.972 2.972-2.972h1.486s0 2.972-2.972 2.972h-1.486zm-.998-2.319v2.371H4.777l6.158-8.399H5.649v-2.371h9.972l-6.129 8.4z"}"></path></svg>`;
});
export {
  Component as default
};
