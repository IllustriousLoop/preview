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
  )}><path d="${"M255.977 147.306C285.345 194.92 349.612 272.93 406 311.866v52.592c-52.596-39.175-105.228-92.47-140.56-145.47l-9.44-14.16-9.44 14.16c-35.446 53.17-87.448 106.787-140.56 145.706v-52.89c55.382-38.943 120.38-116.82 149.977-164.498z"}"></path></svg>`;
});
export {
  Component as default
};
