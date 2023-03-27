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
  )}><g data-name="${"Save Down 1"}"><path d="${"M17.617 6.383a7.944 7.944 0 0 1-1.748 12.568 8.028 8.028 0 0 1-11.586-5.043 8.028 8.028 0 0 1 2.095-7.517c.451-.46-.256-1.168-.707-.707a8.946 8.946 0 0 0 9.756 14.586 8.946 8.946 0 0 0 2.9-14.594c-.451-.461-1.158.247-.707.707Z"}"></path><path d="${"m15.355 10.6-3 3a.5.5 0 0 1-.35.15.508.508 0 0 1-.36-.15l-3-3a.5.5 0 0 1 .71-.71l2.14 2.14V3.555a.508.508 0 0 1 .5-.5.5.5 0 0 1 .5.5v8.49l2.15-2.16a.5.5 0 0 1 .71.71Z"}"></path></g></svg>`;
});
export {
  Component as default
};
