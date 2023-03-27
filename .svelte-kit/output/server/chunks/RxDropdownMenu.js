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
  )}><path fill-rule="${"evenodd"}" d="${"M7.5 3.1a.4.4 0 1 0 0 .8h7a.4.4 0 0 0 0-.8h-7Zm0 2a.4.4 0 1 0 0 .8h7a.4.4 0 0 0 0-.8h-7Zm-.4 2.4c0-.22.18-.4.4-.4h7a.4.4 0 0 1 0 .8h-7a.4.4 0 0 1-.4-.4Zm.4 1.6a.4.4 0 1 0 0 .8h7a.4.4 0 0 0 0-.8h-7Zm-.4 2.4c0-.22.18-.4.4-.4h7a.4.4 0 0 1 0 .8h-7a.4.4 0 0 1-.4-.4ZM2.5 9.25 5 6H0l2.5 3.25Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
