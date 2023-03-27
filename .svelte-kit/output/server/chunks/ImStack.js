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
  )}><path d="${"M16 5 8 1 0 5l8 4 8-4zM8 2.328 13.345 5 8 7.672 2.655 5 8 2.328zm6.398 4.871L16 8l-8 4-8-4 1.602-.801L8 10.398zm0 3L16 11l-8 4-8-4 1.602-.801L8 13.398z"}"></path></svg>`;
});
export {
  Component as default
};
