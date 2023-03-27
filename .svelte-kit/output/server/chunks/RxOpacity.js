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
  )}><path fill-rule="${"evenodd"}" d="${"M7.5 1.5C4.5 4.25 3 6.5 3 9a4.5 4.5 0 1 0 9 0c0-2.5-1.5-4.75-4.5-7.5ZM11 9c0-1.888-1.027-3.728-3.5-6.126C5.027 5.272 4 7.112 4 9a3.5 3.5 0 1 0 7 0Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
