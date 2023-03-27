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
  )}><path d="${"M4 3 2 1H1v1l2 2zm1-3h1v2H5zm4 5h2v1H9zm1-3V1H9L7 3l1 1zM0 5h2v1H0zm5 4h1v2H5zM1 9v1h1l2-2-1-1zm14.781 4.781L5.842 3.842a.752.752 0 0 0-1.061 0l-.939.939a.752.752 0 0 0 0 1.061l9.939 9.939a.752.752 0 0 0 1.061 0l.939-.939a.752.752 0 0 0 0-1.061zM7.5 8.5l-3-3 1-1 3 3-1 1z"}"></path></svg>`;
});
export {
  Component as default
};
