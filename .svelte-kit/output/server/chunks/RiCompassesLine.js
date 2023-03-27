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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M11 4.126V2h2v2.126a4.002 4.002 0 0 1 1.803 6.728l6.063 10.502-1.732 1-6.063-10.501a4.004 4.004 0 0 1-2.142 0L4.866 22.356l-1.732-1 6.063-10.502A4.002 4.002 0 0 1 11 4.126zM12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}"></path></svg>`;
});
export {
  Component as default
};
