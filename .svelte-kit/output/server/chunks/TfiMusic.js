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
  )}><path d="${"m14.765 4.459.421-.906L8 .217v9.878a2.885 2.885 0 0 0-1.898-.722c-1.607 0-2.914 1.308-2.914 2.914s1.307 2.914 2.914 2.914 2.914-1.308 2.914-2.914c0-.053-.013-.103-.016-.154V1.783l5.765 2.676zm-8.663 9.742c-1.056 0-1.914-.858-1.914-1.914s.858-1.914 1.914-1.914 1.914.858 1.914 1.914-.859 1.914-1.914 1.914z"}"></path></svg>`;
});
export {
  Component as default
};
