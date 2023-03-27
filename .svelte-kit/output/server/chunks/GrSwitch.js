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
  )}><path fill="${"#000"}" fill-rule="${"evenodd"}" d="${"M5 1h14v22H5V1Zm2.5 10H17v10H7V11h.5ZM15 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4 13v-5h2v5h-2Zm1-13.998a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
