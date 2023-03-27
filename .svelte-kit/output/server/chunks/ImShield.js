import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M15 0 8 2 1 0S.93.808 1 2l7 2.189L15 2c.07-1.192 0-2 0-2zM1.128 3.049C1.503 6.966 2.901 13.553 8 16c5.099-2.448 6.497-9.034 6.872-12.951L8 5.633 1.128 3.049z"}"></path></svg>`;
});
export {
  Component as default
};
