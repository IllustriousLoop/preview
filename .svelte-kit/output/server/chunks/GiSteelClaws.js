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
  )}><path d="${"M20.11 16.705h120.31l300.66 207.21 56.39 134-138.88-96-7.06-16.79zM309 423.295l-56.39-134-238.08-164.09v94.45zm-48.47-146.43 10.79 25.64 128.76 89-56.39-134-329.16-226.8v76.64z"}"></path></svg>`;
});
export {
  Component as default
};
