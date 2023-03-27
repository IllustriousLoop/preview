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
  )}><path fill="${"#444"}" d="${"M13.821 15.761H4.783V8.014l9.038-1.291zm13.396 0H15.032V6.563l12.185-1.777zM13.821 16.81H4.783v7.747l9.038 1.291zm13.396 0H15.032v9.198l12.185 1.777z"}"></path></svg>`;
});
export {
  Component as default
};
