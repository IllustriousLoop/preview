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
  )}><path d="${"M13.384 3c-.937-1.829-2.805-3-4.884-3S4.554 1.17 3.616 3H0v13h17V3h-3.616zM8.5 1c1.522 0 2.907.767 3.732 2H4.768A4.49 4.49 0 0 1 8.5 1zM16 15H1V4h15v11zm-8-5H6V9h2V7h1v2h2v1H9v2H8v-2z"}"></path></svg>`;
});
export {
  Component as default
};
