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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M7.737 13h8.526L12 6.606 7.737 13zm4.679-9.376 7.066 10.599a.5.5 0 0 1-.416.777H4.934a.5.5 0 0 1-.416-.777l7.066-10.599a.5.5 0 0 1 .832 0zM5 17h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z"}"></path></svg>`;
});
export {
  Component as default
};
