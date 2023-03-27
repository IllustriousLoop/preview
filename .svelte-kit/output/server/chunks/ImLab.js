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
  )}><path d="${"M14.942 12.57 10 4.335V1h.5c.275 0 .5-.225.5-.5s-.225-.5-.5-.5h-5c-.275 0-.5.225-.5.5s.225.5.5.5H6v3.335L1.058 12.57C-.074 14.456.8 16 3 16h10c2.2 0 3.074-1.543 1.942-3.43zM3.766 10 7 4.61V1h2v3.61L12.234 10H3.766z"}"></path></svg>`;
});
export {
  Component as default
};
