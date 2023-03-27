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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M19.778 4.222a6 6 0 0 1 0 8.485l-2.122 2.12-4.949 4.951a6 6 0 0 1-8.485-8.485l7.07-7.071a6.001 6.001 0 0 1 8.486 0zm-4.95 10.606L9.172 9.172l-3.536 3.535a4 4 0 0 0 5.657 5.657l3.535-3.536z"}"></path></svg>`;
});
export {
  Component as default
};
