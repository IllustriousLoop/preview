import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zM9 8c-2.208 0-4 1.792-4 4a4.001 4.001 0 0 0 6.669 2.979l.159-.151-1.414-1.414a2 2 0 1 1-.125-2.943l.126.116 1.414-1.414A3.988 3.988 0 0 0 9 8zm7 0c-2.208 0-4 1.792-4 4a4.001 4.001 0 0 0 6.669 2.979l.159-.151-1.414-1.414a2 2 0 1 1-.125-2.943l.126.116 1.414-1.414A3.988 3.988 0 0 0 16 8z"}"></path></svg>`;
});
export {
  Component as default
};
