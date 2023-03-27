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
  )}><path fill-rule="${"evenodd"}" d="${"M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877Zm-.5.972A5.673 5.673 0 0 0 7 13.15V1.849ZM8 13.15A5.673 5.673 0 0 0 8 1.849V13.15Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
