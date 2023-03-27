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
  )}><path d="${"M24 20.352V3.648H0v16.704h24zM18.433 5.806h2.736v12.387h-2.736c-2.839 0-5.214-2.767-5.214-6.194s2.375-6.193 5.214-6.193zm-15.602 0h2.736c2.839 0 5.214 2.767 5.214 6.194s-2.374 6.194-5.214 6.194H2.831V5.806z"}"></path></svg>`;
});
export {
  Component as default
};
