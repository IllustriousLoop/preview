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
  )}><path fill-rule="${"evenodd"}" d="${"M5.792 2H1v2h3.218l2.77 12.678H7V17h13v-.248l2.193-9.661L22.531 6H6.655l-.57-2.611L5.792 2Zm14.195 6H7.092l1.529 7h9.777l1.589-7Z"}" clip-rule="${"evenodd"}"></path><path d="${"M10 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm9-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"}"></path></svg>`;
});
export {
  Component as default
};
