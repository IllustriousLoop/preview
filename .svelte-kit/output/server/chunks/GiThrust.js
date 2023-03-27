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
  )}><path d="${"M452.798 479.462 59.205 481.31s154.378-369.683 151.153-379.303l-46.12-.224 93.677-71.09 95.207 72.397-50.263.224z"}"></path></svg>`;
});
export {
  Component as default
};
