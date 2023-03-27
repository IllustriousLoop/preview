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
  )}><path d="${"M32 256c14.1 35 36.2 66 64 90.6V165.4C68.2 190 46.1 221 32 256zm448 0c-14.1-35-36.2-66-64-90.6v181.2c27.8-24.6 49.9-55.6 64-90.6zM256 105c-47.1 0-91 13.4-128 36.5v228.9c37 23.1 80.9 36.5 128 36.5s91-13.4 128-36.5V141.5c-37-23.1-80.9-36.5-128-36.5zm96 135v64h-32v-32h-48v32h-32v-32h-48v32h-32v-96h32v32h48v-32h32v32h48v-32h32v32z"}"></path></svg>`;
});
export {
  Component as default
};
