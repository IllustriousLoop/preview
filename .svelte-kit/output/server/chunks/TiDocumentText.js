import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M17 21H7c-1.654 0-3-1.346-3-3V6c0-1.654 1.346-3 3-3h10c1.654 0 3 1.346 3 3v12c0 1.654-1.346 3-3 3zM7 5c-.551 0-1 .449-1 1v12c0 .551.449 1 1 1h10c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1H7zm9 6H8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1zm0-3H8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1zm0 6H8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1zm0 3H8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1z"}"></path></svg>`;
});
export {
  Component as default
};
