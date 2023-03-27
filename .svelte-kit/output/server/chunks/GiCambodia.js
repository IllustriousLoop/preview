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
  )}><path d="${"M19.823 176.292c52.634-142.707 221.115-88.048 332.738-44.2l-13.409-41.716c41.185-20.775 48.6-23.357 81.943 3.973l59.098-35.757-15.892 52.642c44.039 50.132 22.324 108.155 23.838 163.39l-155.167 71.975 37.964 75.522c-21.918 3.053-62.448-14.29-101.311-8.443l-11.905 37.608-119.7 2.122C50.901 387.048 33.051 278.67 19.822 176.292z"}"></path></svg>`;
});
export {
  Component as default
};
