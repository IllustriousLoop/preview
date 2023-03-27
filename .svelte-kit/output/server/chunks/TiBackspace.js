import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M19.5 5h-10c-1.266 0-2.834.807-3.57 1.837L3.32 10.49l-1.199 1.679c-.121.175-.122.492.003.664l1.188 1.664 2.619 3.667C6.666 19.193 8.233 20 9.5 20h10c1.379 0 2.5-1.122 2.5-2.5v-10C22 6.122 20.879 5 19.5 5zm-2.293 9.793a.999.999 0 1 1-1.414 1.414L13.5 13.914l-2.293 2.293a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414l2.293-2.293-2.293-2.293a.999.999 0 1 1 1.414-1.414l2.293 2.293 2.293-2.293a.999.999 0 1 1 1.414 1.414L14.914 12.5l2.293 2.293z"}"></path></svg>`;
});
export {
  Component as default
};
