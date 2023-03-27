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
  )}><path d="${"M.005 8 0 3.124l6-.815V8zM7 2.164 14.998 1v7H7zM15 9l-.002 7L7 14.875V9zm-9 5.747-5.995-.822V8.999H6z"}"></path></svg>`;
});
export {
  Component as default
};
