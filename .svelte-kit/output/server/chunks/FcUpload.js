import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { version: "1" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><g fill="${"#009688"}"><path d="${"M24 10.9 35 24H13zM20 40h8v4h-8zm0-6h8v4h-8z"}"></path><path d="${"M20 21h8v11h-8zM6 4h36v4H6z"}"></path></g></svg>`;
});
export {
  Component as default
};
