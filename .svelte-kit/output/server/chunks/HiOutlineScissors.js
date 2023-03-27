import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { stroke: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M14.121 14.121 19 19m-7-7 7-7m-7 7-2.879 2.879M12 12 9.121 9.121m0 5.758a3 3 0 1 0-4.243 4.243 3 3 0 0 0 4.243-4.243zm0-5.758a3 3 0 1 0-4.243-4.243 3 3 0 0 0 4.243 4.243z"}"></path></svg>`;
});
export {
  Component as default
};
