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
  )}><path fill-rule="${"evenodd"}" d="${"M20.547 3.672a1 1 0 0 0-1.414 0l-5.364 5.364H2v2h.008c.218 5.33 4.608 9.585 9.992 9.585 5.384 0 9.774-4.255 9.992-9.585H22v-2h-5.403l3.95-3.95a1 1 0 0 0 0-1.414Zm-6.37 7.364h5.813a8 8 0 0 1-15.98 0h10.166Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
