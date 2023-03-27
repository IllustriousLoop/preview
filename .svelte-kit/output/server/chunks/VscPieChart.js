import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M10 6h3.9A5.006 5.006 0 0 0 10 2.1V6Zm0-4.917A6.005 6.005 0 0 1 15 7H9V1c.34 0 .675.028 1 .083ZM7 8l1 1h4.9A5.002 5.002 0 0 1 3 8a5.002 5.002 0 0 1 4-4.9V8Zm1 6a6.002 6.002 0 0 0 6-6H8V2a6.002 6.002 0 0 0 0 12Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
