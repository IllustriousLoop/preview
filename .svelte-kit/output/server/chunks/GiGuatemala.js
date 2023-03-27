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
  )}><path d="${"m190.8 25.24 175.1 1.08-.1 215.08 27.3-.9 78 19.9-97.3 76.3-20.5 68.7-84.7 81.4c-106.1-3.9-179.25-36.3-227.72-90l31.21-136.1 44.61-40.2 117.8-2.1c-.5-50.9-50.7-91.8-109.5-130.92l47 3.81z"}"></path></svg>`;
});
export {
  Component as default
};
