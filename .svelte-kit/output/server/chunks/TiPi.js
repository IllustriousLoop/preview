import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M18.707 8.535a.999.999 0 0 0-1.414 0 3.247 3.247 0 0 1-4.586 0 5.25 5.25 0 0 0-7.414 0 .999.999 0 1 0 1.414 1.414c.374-.374.82-.624 1.293-.776V17a1 1 0 1 0 2 0V9.174a3.19 3.19 0 0 1 1.293.775A5.222 5.222 0 0 0 14 11.386V17a1 1 0 1 0 2 0v-5.614a5.215 5.215 0 0 0 2.707-1.437.999.999 0 0 0 0-1.414z"}"></path></svg>`;
});
export {
  Component as default
};
