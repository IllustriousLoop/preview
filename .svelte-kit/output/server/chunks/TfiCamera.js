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
  )}><path d="${"M5.958 3V2H3.042v1H0v12h17V3H5.958zM16 14H1V7h6.557A3.953 3.953 0 0 0 7 9c0 2.206 1.794 4 4 4s4-1.794 4-4c0-.731-.212-1.409-.557-2H16v7zm-2-5c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm-.382-3c-.704-.614-1.612-1-2.618-1s-1.914.386-2.618 1H1V4h15v2h-2.382z"}"></path></svg>`;
});
export {
  Component as default
};
