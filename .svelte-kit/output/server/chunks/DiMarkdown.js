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
  )}><path fill="${"#444"}" d="${"M25.674 9.221H6.326c-.899 0-1.63.731-1.63 1.63V21.72c0 .899.731 1.63 1.63 1.63h19.348c.899 0 1.63-.731 1.63-1.63V10.851c0-.899-.731-1.63-1.63-1.63zm-8.261 11.301-2.826.003v-4.239l-2.12 2.717-2.12-2.717v4.239H7.521v-8.478h2.826l2.12 2.826 2.12-2.826 2.826-.003v8.478zm4.219.707-3.512-4.943h2.119v-4.239h2.826v4.239h2.119l-3.553 4.943z"}"></path></svg>`;
});
export {
  Component as default
};
