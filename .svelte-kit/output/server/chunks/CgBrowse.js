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
  )}><path fill-rule="${"evenodd"}" d="${"M14.364 13.121c.924.924 1.12 2.3.586 3.415l1.535 1.535a1 1 0 0 1-1.414 1.414l-1.535-1.535a3.001 3.001 0 0 1-3.415-4.829 3 3 0 0 1 4.243 0ZM12.95 15.95a1 1 0 1 0-1.414-1.414 1 1 0 0 0 1.414 1.414Z"}" clip-rule="${"evenodd"}"></path><path d="${"M8 5h8v2H8V5Zm8 4H8v2h8V9Z"}"></path><path fill-rule="${"evenodd"}" d="${"M4 4a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4Zm3-1h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
