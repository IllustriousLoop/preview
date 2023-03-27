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
  )}><path d="${"M1 17h3V0H1v17zM2 1h1v15H2V1zm3 16h3V0H5v17zM6 1h1v15H6V1zm3 16h3V0H9v17zm1-16h1v15h-1V1zm3-1v17h3V0h-3zm2 16h-1V1h1v15z"}"></path></svg>`;
});
export {
  Component as default
};
