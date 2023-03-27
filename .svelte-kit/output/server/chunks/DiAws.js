import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 34 32" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#444"}" d="${"m10.871 28.625-3.22-1.155v-4.72l3.22 1.097zm.59 0 3.22-1.155v-4.72l-3.22 1.097zm-3.48-6.229 3.259-.917 3.022.974-3.022 1.026zm-.944-.365-3.22-1.155v-4.72l3.22 1.097zm.591 0 3.22-1.155v-4.72l-3.22 1.097zm-3.48-6.229 3.259-.917 3.022.975-3.022 1.026zm10.403 6.229-3.221-1.155v-4.72l3.221 1.097zm.591 0 3.22-1.155v-4.72l-3.22 1.097zm-3.48-6.229 3.259-.917 3.022.975-3.022 1.026zm6.723-.366-3.22-1.155v-4.72l3.22 1.097zm.591 0 3.22-1.155v-4.72l-3.22 1.097zm-3.48-6.228 3.259-.917 3.022.974-3.022 1.026zm10.403 6.228-3.22-1.155v-4.72l3.22 1.097zm.591 0 3.221-1.155v-4.72l-3.221 1.097zm-3.48-6.228 3.259-.917 3.022.974-3.022 1.026z"}"></path></svg>`;
});
export {
  Component as default
};
