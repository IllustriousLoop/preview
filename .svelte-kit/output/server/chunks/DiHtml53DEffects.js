import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 32 32" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#444"}" d="${"m16.957 6.062-5.808 1.88 12.58 4.07v8.027l-8.383 2.711-7.074-2.287V12.6l6.836 2.213 5.808-1.879L8.318 8.857l-3.622 1.172v13.036l10.649 3.445 11.958-3.869V9.411z"}"></path></svg>`;
});
export {
  Component as default
};
