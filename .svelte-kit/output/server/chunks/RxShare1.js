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
  )}><path fill-rule="${"evenodd"}" d="${"M5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm.713 1.164a2.5 2.5 0 1 1 0-2.328l3.391-2.12A2.5 2.5 0 1 1 14 3.5a2.5 2.5 0 0 1-4.484 1.52l-3.53 2.207a2.526 2.526 0 0 1 0 .546l3.53 2.206a2.5 2.5 0 1 1-.411.804l-3.392-2.12ZM11.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
