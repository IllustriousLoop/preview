import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M174.688 28.063v71.625h-80.75v81.374H22.313v160.094h71.625v80.72h80.75v71.655H334.75v-71.655h81.375v-80.72h71.656V181.063h-71.655V99.688H334.75V28.064H174.688zm18.687 18.687h122.688v153h153.03v122.72H316.062v152.373H193.375V322.47H41V199.75h152.375v-153z"}"></path></svg>`;
});
export {
  Component as default
};
