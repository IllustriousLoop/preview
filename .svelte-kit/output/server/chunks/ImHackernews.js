import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M0 0v16h16V0H0zm8.5 9.125V12.5h-1V9.125L4.766 4H5.9L8 7.938 10.1 4h1.134L8.5 9.125z"}"></path></svg>`;
});
export {
  Component as default
};
