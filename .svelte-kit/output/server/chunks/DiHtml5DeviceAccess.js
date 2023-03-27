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
  )}><path fill="${"#444"}" d="${"m21.092 10.206 4.59-4.59h-4.919L16 10.379l-4.763-4.763H6.318l4.59 4.59H4.684v16.749h8.189l3.126-3.127 3.127 3.127h8.189V10.206h-6.224zM16 18.907l-4.567 4.569h-3.27v-9.792h15.674v9.792h-3.269L16 18.907z"}"></path></svg>`;
});
export {
  Component as default
};
