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
  )}><path d="${"M24 6.222a2.222 2.222 0 0 1-2.222 2.222h-8.89a2.222 2.222 0 0 1 0-4.444h8.89C23.005 4 24 4.995 24 6.222zm-7.333 9.334h-8.89a2.222 2.222 0 0 0 0 4.444h8.89a2.222 2.222 0 0 0 0-4.444zm0-5.778H13.11a2.222 2.222 0 0 0 0 4.444h3.556a2.222 2.222 0 0 0 0-4.444zM2.222 15.556a2.222 2.222 0 1 0 0 4.444 2.222 2.222 0 0 0 0-4.444z"}"></path></svg>`;
});
export {
  Component as default
};
