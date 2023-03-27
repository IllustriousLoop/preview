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
  )}><path fill-rule="${"evenodd"}" d="${"M5.675 3.5a.45.45 0 0 1 .45-.45h4.5a.45.45 0 1 1 0 .9h-1.62l-1.774 7.1h1.644a.45.45 0 0 1 0 .9h-4.5a.45.45 0 1 1 0-.9h1.619l1.775-7.1H6.125a.45.45 0 0 1-.45-.45Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
