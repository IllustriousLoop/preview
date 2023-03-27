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
  )}><path fill-rule="${"evenodd"}" d="${"M15 6a3.001 3.001 0 0 1-2 2.83v8.044c1.725-.444 3-2.01 3-3.874h2a6.002 6.002 0 0 1-5 5.917V20a1 1 0 1 1-2 0v-1.083A6.002 6.002 0 0 1 6 13h2a4.002 4.002 0 0 0 3 3.874V8.829A3.001 3.001 0 1 1 15 6Zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
