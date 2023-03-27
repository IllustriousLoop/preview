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
  )}><path d="${"M0 .293V17h16.707L0 .293zm1 2.414 2.957 2.957-.655.655.707.707.655-.655.709.709-.655.656.707.707.655-.655.71.709-.655.655.707.707.655-.655.71.71-.655.655.707.707.655-.655.709.709-.655.655.707.707.655-.655.71.71-.655.655.707.707.655-.655L14.293 16H1V2.707zM2 15h7.707L2 7.293V15zm1-5.293L7.293 14H3V9.707z"}"></path></svg>`;
});
export {
  Component as default
};
