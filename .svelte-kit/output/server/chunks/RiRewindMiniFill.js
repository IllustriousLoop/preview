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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M11 17.035a.5.5 0 0 1-.788.409l-7.133-5.036a.5.5 0 0 1 0-.816l7.133-5.036a.5.5 0 0 1 .788.409v10.07zm1.079-4.627a.5.5 0 0 1 0-.816l7.133-5.036a.5.5 0 0 1 .788.409v10.07a.5.5 0 0 1-.788.409l-7.133-5.036z"}"></path></svg>`;
});
export {
  Component as default
};
