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
  )}><path d="${"m12.461 5.57-.309 2.93H9.81V17H6.292V8.5H4.539V5.57h1.753V3.806C6.292 1.423 7.283 0 10.1 0h2.341v2.93h-1.465c-1.093 0-1.166.413-1.166 1.176V5.57h2.651z"}"></path></svg>`;
});
export {
  Component as default
};
