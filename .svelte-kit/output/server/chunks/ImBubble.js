import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M8 1c4.418 0 8 2.91 8 6.5S12.418 14 8 14c-.424 0-.841-.027-1.247-.079-1.718 1.718-3.77 2.027-5.753 2.072v-.421c1.071-.525 2-1.48 2-2.572a3.01 3.01 0 0 0-.034-.448C1.157 11.36 0 9.54 0 7.5 0 3.91 3.582 1 8 1z"}"></path></svg>`;
});
export {
  Component as default
};
