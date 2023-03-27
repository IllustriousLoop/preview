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
  )}><path d="${"m1.33 19-.6-1.036 4.33-2.5L7.103 19H1.329Zm13.856 0H9.412l-3.619-6.268 4.33-2.5L15.187 19Zm8.083 0h-5.774l-6.64-11.5 4.33-2.5 8.084 14Z"}"></path></svg>`;
});
export {
  Component as default
};
