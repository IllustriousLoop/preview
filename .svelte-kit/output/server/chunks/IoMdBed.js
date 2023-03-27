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
  )}><path d="${"M168.7 264.5c29 0 52.4-22.9 52.4-51.2s-23.4-51.2-52.4-51.2-52.4 22.9-52.4 51.2 23.5 51.2 52.4 51.2zm209.5-102.4H238.5v119.5H98.9V128H64v256h34.9v-51.2h314.2V384H448V230.4c0-37.7-31.2-68.3-69.8-68.3z"}"></path></svg>`;
});
export {
  Component as default
};
