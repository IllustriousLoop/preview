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
  )}><path fill-rule="${"evenodd"}" d="${"M8 2h4.5a.5.5 0 0 1 .5.5V5H8V2ZM7 5V2H2.5a.5.5 0 0 0-.5.5V5h5ZM2 6v3h5V6H2Zm6 0h5v3H8V6Zm0 4h5v2.5a.5.5 0 0 1-.5.5H8v-3Zm-6 2.5V10h5v3H2.5a.5.5 0 0 1-.5-.5Zm-1-10A1.5 1.5 0 0 1 2.5 1h10A1.5 1.5 0 0 1 14 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 12.5v-10Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
