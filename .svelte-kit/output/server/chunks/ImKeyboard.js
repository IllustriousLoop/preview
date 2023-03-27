import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 18 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M17 2H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-7 2h2v2h-2V4zm3 3v2h-2V7h2zM7 4h2v2H7V4zm3 3v2H8V7h2zM4 4h2v2H4V4zm3 3v2H5V7h2zM2 4h1v2H2V4zm0 3h2v2H2V7zm1 5H2v-2h1v2zm9 0H4v-2h8v2zm4 0h-3v-2h3v2zm0-3h-2V7h2v2zm0-3h-3V4h3v2z"}"></path></svg>`;
});
export {
  Component as default
};
