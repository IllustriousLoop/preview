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
  )}><path d="${"M9.25 14.5a.749.749 0 1 1-1.5 0 .749.749 0 1 1 1.5 0zM16 1.5v14c0 .827-.625 1.5-1.392 1.5H2.392C1.625 17 1 16.327 1 15.5v-14C1 .673 1.625 0 2.392 0h12.217C15.375 0 16 .673 16 1.5zm-1 0c0-.271-.179-.5-.392-.5H2.392C2.179 1 2 1.229 2 1.5v14c0 .271.179.5.392.5h12.217c.212 0 .391-.229.391-.5v-14zM3 2h11v11H3V2zm1 10h9V3H4v9z"}"></path></svg>`;
});
export {
  Component as default
};
