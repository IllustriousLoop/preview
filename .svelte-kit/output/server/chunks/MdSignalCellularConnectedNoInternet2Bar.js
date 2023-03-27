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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0V0z"}"></path><path fill-opacity="${".3"}" d="${"M22 8V2L2 22h16V8h4z"}"></path><path d="${"M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z"}"></path></svg>`;
});
export {
  Component as default
};
