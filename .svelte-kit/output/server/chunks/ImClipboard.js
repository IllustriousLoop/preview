import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M14.5 2H10a2 2 0 1 0-4 0H1.5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5zM8 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm6 14H2V3h2v1.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V3h2v12z"}"></path><path d="${"M7 13.414 3.793 9.707l.914-.914L7 10.586l4.293-3.793.914.914z"}"></path></svg>`;
});
export {
  Component as default
};
