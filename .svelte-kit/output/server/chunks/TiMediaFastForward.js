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
  )}><path d="${"M15.053 6.912A1.797 1.797 0 0 0 12 8.201v9a1.8 1.8 0 0 0 3.053 1.287C17.434 16.174 21 12.701 21 12.701s-3.566-3.474-5.947-5.789zm-9 0A1.797 1.797 0 0 0 3 8.201v9a1.8 1.8 0 0 0 3.053 1.287C8.434 16.174 12 12.701 12 12.701S8.434 9.227 6.053 6.912z"}"></path></svg>`;
});
export {
  Component as default
};
