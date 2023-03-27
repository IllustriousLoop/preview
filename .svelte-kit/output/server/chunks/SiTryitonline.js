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
  )}><path d="${"M.75 6a.75.75 0 1 0 0 1.5H4.5v9.75a.75.75 0 1 0 1.5 0V7.5h17.25a.75.75 0 1 0 0-1.5zm10.5 3a.75.75 0 0 0-.75.75v7.5a.75.75 0 1 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75zm8.25 0a4.51 4.51 0 0 0-4.5 4.5c0 2.48 2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5S21.98 9 19.5 9zm0 1.5c1.67 0 3 1.33 3 3s-1.33 3-3 3-3-1.33-3-3 1.33-3 3-3Z"}"></path></svg>`;
});
export {
  Component as default
};
