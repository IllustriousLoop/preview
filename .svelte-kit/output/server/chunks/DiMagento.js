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
  )}><path fill="${"#444"}" d="${"M26.941 10.161 16.007 3.408 5.041 10.172V22.4l2.924 1.743V11.856l8.041-4.992 8.027 4.992v12.317l2.924-1.772V10.173zm-9.346 5.297v10.073l-1.588 1.004-1.602-1.004V11.206l-3.574 2.215v12.524l5.176 3.22 5.162-3.22V13.421l-3.574-2.215z"}"></path></svg>`;
});
export {
  Component as default
};
