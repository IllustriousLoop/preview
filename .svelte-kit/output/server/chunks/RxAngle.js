import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 15 15" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M8.891 2.194a.5.5 0 0 1 .115.697L2.474 12H13.5a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.406-.791l7.1-9.9a.5.5 0 0 1 .697-.115ZM11.1 6.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM10.4 4a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm1.7 4.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm1.3 1.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
