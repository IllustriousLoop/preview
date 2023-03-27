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
  )}><path d="${"m21.299 7.76-5.019 4.88-1.394-1.434 2.436-2.368-6.02.015a2.4 2.4 0 0 0-2.394 2.406l.014 5.9 2.268-2.256 1.41 1.418-4.962 4.937-4.937-4.962 1.418-1.41L6.522 17.3l-.014-6.036a4.8 4.8 0 0 1 4.788-4.812l5.928-.014-2.239-2.303 1.434-1.394L21.3 7.76Z"}"></path></svg>`;
});
export {
  Component as default
};
