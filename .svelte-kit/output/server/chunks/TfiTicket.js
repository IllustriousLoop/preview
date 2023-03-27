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
  )}><path d="${"M9.5 1v.5a1.001 1.001 0 0 1-2 0V1H4v15h3.5v-.5a1.001 1.001 0 0 1 2 0v.5H13V1H9.5zM6.563 2c.223.861 1.007 1.5 1.937 1.5s1.714-.639 1.937-1.5H12v6H5V2h1.563zm3.874 13c-.222-.861-1.006-1.5-1.937-1.5s-1.714.639-1.937 1.5H5V9h7v6h-1.563z"}"></path></svg>`;
});
export {
  Component as default
};
