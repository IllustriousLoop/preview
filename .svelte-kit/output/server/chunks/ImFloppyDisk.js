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
  )}><path d="${"M14 0H0v16h16V2l-2-2zM8 2h2v4H8V2zm6 12H2V2h1v5h9V2h1.172l.828.828V14z"}"></path></svg>`;
});
export {
  Component as default
};
