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
  )}><path d="${"m494 18.02-101 .103V119h101zm-119 .12-238 .247V119h238zm-256 .266L18 18.51V119h101zM18 137v110h229V137zm247 0v110h229V137zM18 265v110h101V265zm119 0v110h238V265zm256 0v110h101V265zM18 393v100.98l229-.236V393zm247 0v100.727l229-.237V393z"}"></path></svg>`;
});
export {
  Component as default
};
