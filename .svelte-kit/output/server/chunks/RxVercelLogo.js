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
  )}><path fill-rule="${"evenodd"}" d="${"m7.5 1-.577 1.003L1.175 12 .6 13h13.8l-.575-1-5.748-9.997L7.5 1Zm0 2.006L2.329 12H12.67L7.5 3.006Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
