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
  )}><path d="${"M13.565 17.91H24v1.964H13.565zm-3.201-5.09-9.187 8.003 2.86-7.004L0 11.179l9.187-8.002-3.11 7.451z"}"></path></svg>`;
});
export {
  Component as default
};
