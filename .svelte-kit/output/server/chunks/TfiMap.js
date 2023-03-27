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
  )}><path d="${"M10.499 4.438 5.597 3.02 0 3v11h5.348l5.196 1.479L16 13.874V2.833l-5.501 1.605zM6 4.177l4 1.157v8.95l-4-1.139V4.177zM1 4h4v9.017L1 13V4zm14 9.126-4 1.177V5.334l4-1.167v8.959z"}"></path></svg>`;
});
export {
  Component as default
};
