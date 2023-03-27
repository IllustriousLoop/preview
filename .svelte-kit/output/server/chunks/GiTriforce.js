import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M256 59.72 142.687 256h226.625L256 59.72zM369.313 256 256 452.28h226.625L369.312 256zM256 452.28 142.687 256 29.376 452.28H256z"}"></path></svg>`;
});
export {
  Component as default
};
