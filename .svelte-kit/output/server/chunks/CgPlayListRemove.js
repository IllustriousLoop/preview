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
  )}><path d="${"M15.964 4.634h-12v2h12v-2Zm0 4h-12v2h12v-2Zm-12 4h8v2h-8v-2Zm9 1.076 1.415-1.415 2.121 2.121 2.121-2.12 1.415 1.413-2.122 2.122 2.122 2.12-1.415 1.415-2.121-2.121-2.121 2.121-1.415-1.414 2.122-2.122-2.122-2.12Z"}"></path></svg>`;
});
export {
  Component as default
};
