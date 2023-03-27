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
  )}><path fill-rule="${"evenodd"}" d="${"M5.209 3h13.694l1.209 7.253-8.056 10.933L4 10.253 5.209 3Zm1.694 2-.791 4.747 5.944 8.067L18 9.747 17.209 5H6.903Z"}" clip-rule="${"evenodd"}"></path><path d="${"M8.056 8h8v2h-8V8Z"}"></path></svg>`;
});
export {
  Component as default
};
