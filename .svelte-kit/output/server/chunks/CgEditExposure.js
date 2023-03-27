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
  )}><path fill-rule="${"evenodd"}" d="${"M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9-5v2H9v2h2v2h2v-2h2V9h-2V7h-2Zm-2 8v2h6v-2H9Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
