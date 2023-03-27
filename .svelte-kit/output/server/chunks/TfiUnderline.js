import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M15 1v1h-1v6.459c0 3.032-2.467 5.5-5.5 5.5S3 11.491 3 8.459V2H2V1h3v1H4v6.459c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5V2h-1V1h3zM2 16h13v-1H2v1z"}"></path></svg>`;
});
export {
  Component as default
};
