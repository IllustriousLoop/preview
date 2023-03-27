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
  )}><path d="${"M153 35v58h206V35H153zm60.3 13h32l-16 32-16-32zm74.7 0 16 32h-32l16-32zm-183 89v350h142V137H105zm160 0v350h142V137H265zm173 141v84h52v-84h-52zm26 26a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16z"}"></path></svg>`;
});
export {
  Component as default
};
