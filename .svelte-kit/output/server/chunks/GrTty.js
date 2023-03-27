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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-linecap="${"round"}" stroke-width="${"2"}" d="${"M7 19h10a1 1 0 0 1 1 1h0a1 1 0 0 1-1 1H7h0a1 1 0 0 1-1-1h0a1 1 0 0 1 1-1Zm0-9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"}"></path></svg>`;
});
export {
  Component as default
};
