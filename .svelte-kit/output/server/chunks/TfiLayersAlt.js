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
  )}><path d="${"M11 1H0v9h11V1zm-1 8H1V2h9v7zm4 4H3v-1.981h1V12h9V5h-.994V4H14v9zm3-6v9H6v-1.981h1V15h9V8h-.994V7H17z"}"></path></svg>`;
});
export {
  Component as default
};
