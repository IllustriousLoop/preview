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
  )}><path d="${"M21 21v228.569h168.172v115.56h-21.003V270.98H21V491h470V270.98H343.831v94.147h-21.003v-115.56H491V21h-35.103v145.113H347.063V21H310.49v145.113H201.656V21h-36.719v145.113H56.103V21z"}"></path></svg>`;
});
export {
  Component as default
};
