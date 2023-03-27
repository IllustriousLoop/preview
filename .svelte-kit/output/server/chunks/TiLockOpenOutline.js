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
  )}><circle cx="${"12"}" cy="${"17"}" r="${"1.3"}"></circle><path d="${"M18 4c-2.206 0-4 1.794-4 4v3h-4v-1H7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-1V8a2 2 0 0 1 4 0v3a1 1 0 0 0 2 0V8c0-2.206-1.794-4-4-4zm-1 15H7v-7h10.003L17 19z"}"></path></svg>`;
});
export {
  Component as default
};
