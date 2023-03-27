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
  )}><path d="${"M21 21v224.572h179.481v20.856H21V491h111.184V370.27h247.632V491H491V266.43H311.519v-20.857H491V21H379.816v120.731H132.184V21H21zm139.237 0v90.034h191.379V21H160.237zm0 379.966V491h191.379v-90.034H160.237z"}"></path></svg>`;
});
export {
  Component as default
};
