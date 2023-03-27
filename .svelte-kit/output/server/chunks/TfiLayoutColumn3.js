import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M0 17h5V0H0v17zM1 1h3v15H1V1zm5 16h5V0H6v17zM7 1h3v15H7V1zm5-1v17h5V0h-5zm4 16h-3V1h3v15z"}"></path></svg>`;
});
export {
  Component as default
};
