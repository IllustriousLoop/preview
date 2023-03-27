import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m0 2.339 6.967-.959v6.732H0V2.339zm0 12.322 6.967.959V8.97H0v5.691zM7.734 1.277v6.835H17V0L7.734 1.277zm0 14.446L17 17V8.97H7.734v6.753z"}"></path></svg>`;
});
export {
  Component as default
};
