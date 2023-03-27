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
  )}><path d="${"M256 47 139.4 202.467l93.6-40.115V359h46V162.352l93.6 40.115L256 47zM144 256 32 480h448L368 256h-71v121h-82V256h-71z"}"></path></svg>`;
});
export {
  Component as default
};
